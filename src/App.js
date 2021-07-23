import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Qualifications from "./components/Qualification";
import NotFound from "./components/NotFound";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/awards" component={Qualifications} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </>
    </div>
  );
}

export default App;
