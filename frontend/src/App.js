import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import "./styles/style.css"
import "./styles/variables.css"
const Home = lazy(() => import('./pages/home/Home'));

function App() {

  /* initalizes the apps important configs */
  useEffect(() => {
    getScrollbarWidth();
    getPreferedTheme();
    getPreferedLanguage();
  },[])

  return (
    <React.Fragment>
      <div className='CRA__config--root'>
        <Suspense fallback={<CircularProgress/>}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Suspense fallback={<CircularProgress/>}><Home/></Suspense>}/>
            </Routes>
          </Router>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;

function getScrollbarWidth() {
  //creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  //creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);
  //calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  //removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);
  //save width
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