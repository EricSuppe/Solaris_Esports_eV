import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import "./styles/style.css"
import "./styles/variables.css"
import getScrollbarWidth from './scripts/init/getScrollbarWidth';
import getPreferedLanguage from './scripts/init/getPreferedLanguage';
import getPreferedTheme from './scripts/init/getPreferedTheme';
const Home = lazy(() => import('./pages/home/Home'));

function App() {

  /* initalizes the apps important configs */
  useEffect(() => {
    getScrollbarWidth();
    getPreferedLanguage();
    getPreferedTheme();
  },[])

  return (
    <React.Fragment>
      <div className='CRA__config--root' data-script-target={`init`}>
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
