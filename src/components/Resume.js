import React from "react";
import { motion } from "framer-motion";
import resume from "../img/Resume_v1.5.png";

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
  duration: 1.3,
};

function Resume() {
  return (
    <div className="resume">
      <motion.img
        src={resume}
        className="about-text"
        initial="out"
        animate="in"
        exit="out"
        variants={contentAppear}
        transition={effect}
        style={{ marginTop: "10px" }}
      ></motion.img>
    </div>
  );
}

export default Resume;
