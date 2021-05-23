import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

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
