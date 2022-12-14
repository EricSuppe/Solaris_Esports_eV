import React, { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/style.css"
import "./styles/variables.css"
import "./styles/font/clash-display.css"
import SiteHeader from './components/common/header/SiteHeader';
import Footer from './components/common/footer/Footer';
import Home from "./pages/home/Home"
import { ErrorBoundary } from './components/handlers/ErrorBoundary';
import { ThemeContext } from './context/ThemeContext';
import { init } from './scripts/initialize';

const Layout = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <div className='CRA__config--root flavor--Primary'>
          <SiteHeader hasGuides={false} variant={"Standart"}/>
          <Outlet/>
          <Footer/>
        </div>
      </ErrorBoundary>
    </React.Fragment>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

function App() {
  const {darkMode} = useContext(ThemeContext);

  useEffect(() => {
    new init()
    getScrollbarWidth();
    getPreferedTheme(darkMode);
    getPreferedLanguage();
  },[])

  return (
    <React.Fragment>
      <RouterProvider router={router}/>
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