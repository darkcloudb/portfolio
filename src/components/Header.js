import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Development and Game Design </h1>
        <h3>
          <FontAwesomeIcon icon={faJsSquare} />{" "}
          <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faPython} />{" "}
          <FontAwesomeIcon icon={faNodeJs} />{" "}
        </h3>
      </div>
    </div>
  );
}

export default Header;
