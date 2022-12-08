import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import "./styles/style.css"
import "./styles/variables.css"
import "./styles/ctaButton.css"
import "./styles/font/clash-display.css"
import "./styles/hoverArrow.css"
import SiteHeader from './components/common/header/SiteHeader';
import Footer from './components/common/footer/Footer';
import { ErrorBoundary } from './components/handlers/ErrorBoundary';
import { ThemeContext } from './context/ThemeContext';

const Home = lazy(() => import('./pages/home/Home'));

const Layout = () => {
  return (
    <div className='CRA__config--root flavor--Primary'>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <React.Fragment>
            <ErrorBoundary>
              <SiteHeader hasGuides={false} variant={""}/>
              <Suspense fallback={<CircularProgress />}>
                <Home />
              </Suspense>
            </ErrorBoundary>
          </React.Fragment>
        ),
      },
    ],
  },
]);


function App() {
  const {darkMode} = useContext(ThemeContext);

  useEffect(() => {
    getScrollbarWidth();
    getPreferedTheme(darkMode);
    getPreferedLanguage();
  },[])

  return (
    <React.Fragment>
      <Suspense fallback={<CircularProgress />}>
        <RouterProvider router={router}/>
      </Suspense>
    </React.Fragment>
  );
}

export default App;

function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return document.querySelector("html").style = `--scrollbarWidth: ${scrollbarWidth}px`
}

function getPreferedTheme(darkMode) {
  return document.querySelector(".CRA__config--root").classList.add(`theme--${darkMode ? "Dark" : "Light"}`)
}

/**
 * Sets the prefered language.
 * @returns the prefered language
 */
function getPreferedLanguage() {
  const prefLanguage = navigator.language || navigator.userLanguage
  return document.querySelector("html").lang = `${prefLanguage}`
}