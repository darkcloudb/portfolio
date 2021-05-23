import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faProjectDiagram,
  faEnvelope,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  function linkedin() {
    window.open("https://www.linkedin.com/in/billy-yip-0b9a6b89/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="JRPG Dreamers" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/" style={{ color: "#808080" }}>
                  <FontAwesomeIcon icon={faInfo} /> {" About Me"}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/projects" style={{ color: "#808080" }}>
                  {" "}
                  <FontAwesomeIcon icon={faProjectDiagram} /> {" Projects"}{" "}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={linkedin}>
                <FontAwesomeIcon icon={faLinkedin} /> {" LinkedIn"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/contact" style={{ color: "#808080" }}>
                  <FontAwesomeIcon icon={faEnvelope} /> {" Contact Me"}
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
