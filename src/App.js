import React, { Suspense, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home title="Son Nguyen | Personal Website" />
            </Route>
            <Route path="/about">
              <About title="About | Son Nguyen" />
            </Route>
            <Route path="/portfolio">
              <Portfolio title="Portfolio | Son Nguyen" />
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
