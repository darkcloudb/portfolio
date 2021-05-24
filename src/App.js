import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        {/* <Header /> */}
        {/* <Projects /> */}
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    </div>
  );
}

export default App;
