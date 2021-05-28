import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LineQR from "../img/LINE_QR.jpeg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

function Contact() {
  function linkedin() {
    window.open("https://www.linkedin.com/in/billy-yip-0b9a6b89/");
  }
  return (
    <motion.div
      className="contactCSS"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      {/* <h1>Let's Connect and Stay in Touch</h1> */}

      <h2 className="stayInfo">
        <h2 className="stay">
          <FontAwesomeIcon
            icon={faLine}
            style={{
              fontSize: "150%",
              color: "#07B53B",
              backgroundColor: "white",
              borderRadius: "100rpx",
            }}
          />
          <br></br>
          darkcloudb
          <br></br>
          <img
            src={LineQR}
            alt="QR Code"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "5px",
            }}
          ></img>
        </h2>
        <h2 className="stay">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "150%", color: "#0A66C2" }}
          />
          <br></br>
          LinkedIn
          <br></br>
          <Button variant="secondary" onClick={linkedin}>
            Let's Connect
          </Button>{" "}
        </h2>
        <h2 className="stay">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "140%", color: "whitesmoke" }}
          />
          <br></br>
          Email
          <br></br>
          birii.yip@gmail.com
        </h2>
      </h2>
    </motion.div>
  );
}

export default Contact;
