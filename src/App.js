import "./App.css";
import Copyright from "./Copyright";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Tech from "./Tech";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
          <Projects />
          <Tech />
          <Contact />
          <Copyright />
        </Route>

        <Route exact path="/AboutMe">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
