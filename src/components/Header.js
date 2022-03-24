import React from "react";
import Me from "../img/author.png";
import { motion } from "framer-motion";

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

const photoEffect = {
  type: "tween",
  ease: "anticipate",
  duration: 1.8,
};

const pageTransition = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

function Header() {
  return (
    <motion.div className="header-wrapper">
      <div className="main-info">
        <motion.h1
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          transition={photoEffect}
        >
          <img src={Me} className="imgSize"></img>
        </motion.h1>
        <motion.h3
          className="about-text"
          initial="out"
          animate="in"
          exit="out"
          variants={contentAppear}
          transition={effect}
        >
          Hi, my name is Billy Yip and I am currently residing in the San
          Francisco Bay Area. I am a associate developer that is driven by my
          desire to learn and innovate. Creative problem solver and professional
          customer service in both service and technology field.
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default Header;
