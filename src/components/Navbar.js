import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faEnvelope,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  function linkedin() {
    window.open("https://www.linkedin.com/in/billy-yip-0b9a6b89/");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        {/* <img className="logo" src={logo} alt="JRPG Dreamers" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <a className="nav-link active" aria-current="page">
            <Link
              to="/"
              style={{ color: "#808080", textTransform: "uppercase" }}
            >
              <FontAwesomeIcon icon={faInfo} /> {" About Me"}
            </Link>
          </a>
          <a className="nav-link">
            <Link
              to="/projects"
              style={{ color: "#808080", textTransform: "uppercase" }}
            >
              {" "}
              <FontAwesomeIcon icon={faProjectDiagram} /> {" Projects"}{" "}
            </Link>
          </a>
          <a className="nav-link">
            <Link
              onClick={linkedin}
              style={{ color: "#808080", textTransform: "uppercase" }}
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} /> {" LinkedIn"}
            </Link>
          </a>
          <a className="nav-link">
            <Link
              to="/contact"
              style={{ color: "#808080", textTransform: "uppercase" }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> {" Contact Me"}
            </Link>
          </a>
          <a className="nav-link">
            <Link
              to="/resume"
              style={{ color: "#808080", textTransform: "uppercase" }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> {" Resume"}
            </Link>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
