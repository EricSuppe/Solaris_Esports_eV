import React, { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import "./styles/style.css"
import "./styles/variables.css"
import "./styles/ctaButton.css"
import "./styles/font/clash-display.css"
import Navbar from './components/common/header/SiteHeader';
import Footer from './components/common/footer/Footer';

const Home = lazy(() => import('./pages/home/Home'));

const Layout = () => {
  return (
    <div className='CRA__config--root'>
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
          <Suspense fallback={<CircularProgress />}>
            <Navbar hasGuides={false} variant={"Overlay"}/>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    getScrollbarWidth();
    getPreferedTheme();
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
  document.querySelector("html").style = `--scrollbarWidth: ${scrollbarWidth}px`
}

function getPreferedTheme() {
  const prefTheme = "Dark"
  document.querySelector(".CRA__config--root").classList.add(`theme--${prefTheme}`)
}

function getPreferedLanguage() {
  const prefLanguage = "de"
  document.querySelector("html").lang = `${prefLanguage}`
}