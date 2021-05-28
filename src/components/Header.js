import React from "react";
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

function Header() {
  return (
    <motion.div className="header-wrapper">
      <div className="main-info">
        <motion.h1
          initial="out"
          animate="in"
          exit="out"
          variants={contentAppear}
          transition={effect}
        >
          About Me{" "}
        </motion.h1>
        <motion.h3
          initial="out"
          animate="in"
          exit="out"
          variants={contentAppear}
          transition={effect}
        >
          Hi, my name is Billy Yip and I am currently located in the San
          Francisco Bay Area. My career goal is to be an Software Engineer, Web
          Developer, or Game Designer / Programmer to further develop my skills
          while playing a role in the innovation of programs and/or video games.
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default Header;
