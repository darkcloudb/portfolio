import React from "react";
import Cert from "../img/Certification_Frontend.jpg";
import Cert2 from "../img/full_stack_cert.png";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";

const contentAppear = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const effect = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
};

function Qualifications() {
  return (
    <div className="qualification">
      <motion.img
        src={Cert2}
        alt="Certificate"
        className="cert"
        initial="out"
        animate="in"
        exit="out"
        variants={contentAppear}
        transition={effect}
      ></motion.img>
      {/* <motion.img
        src={Cert}
        alt="Certificate"
        className="cert"
        initial="out"
        animate="in"
        exit="out"
        variants={contentAppear}
        transition={effect}
      ></motion.img> */}
      ;
    </div>
  );
}

export default Qualifications;
