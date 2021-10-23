import { Switch, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </>
  );
}

export default App;
