import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGithubAlt,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  function gitHub() {
    window.open("https://github.com/darkcloudb");
  }

  function gitHubAlt() {
    window.open("https://github.com/darkcloudbalt");
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/billy-yip-0b9a6b89/");
  }

  function codepen() {
    window.open("https://codepen.io/Birii");
  }
  return (
    <>
      <div className="footer">
        <Link to="/awards" style={{ color: "#808080" }} className="footer">
          <FontAwesomeIcon icon={faCertificate} className="icon-links" />
        </Link>
        <FontAwesomeIcon
          className="icon-links"
          icon={faGithub}
          onClick={gitHub}
        />
        <FontAwesomeIcon
          className="icon-links"
          icon={faGithubAlt}
          onClick={gitHubAlt}
        />
        <FontAwesomeIcon
          className="icon-links"
          icon={faLinkedin}
          onClick={linkedin}
        />
        <FontAwesomeIcon
          className="icon-links"
          icon={faCodepen}
          onClick={codepen}
        />
      </div>
    </>
  );
}

export default Footer;
