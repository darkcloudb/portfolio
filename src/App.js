import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <Projects />
        {/* <Switch>
          <Route exact path="/" />
        </Switch> */}
        <Footer />
      </>
    </div>
  );
}

export default App;
