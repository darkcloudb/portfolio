import React from "react";
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

function Header() {
  return (
    <motion.div
      className="header-wrapper"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className="main-info">
        <h1>About Me </h1>
        <h3>
          Hi, my name is Billy Yip and I am currently located in the San
          Francisco Bay Area. My career goal is to be an Software Engineer, Web
          Developer, or Game Designer / Programmer to further develop my skills
          while playing a role in the innovation of programs and/or video games.
        </h3>
      </div>
    </motion.div>
  );
}

export default Header;
