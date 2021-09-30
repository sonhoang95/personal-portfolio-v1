import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import About from "./pages/About"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
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
      </Router>
    </>
  )
}

export default App
