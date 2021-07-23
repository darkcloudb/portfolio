import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../img/Resume_v1.2.jpg";

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

function NotFound() {
  return (
    <motion.div
      className="header-wrapper"
      initial="out"
      animate="in"
      exit="out"
      variants={contentAppear}
      transition={effect}
    >
      <h1>404</h1>
      <h5>
        Opps looks like an error!
        <Link to="/"> Go back.</Link>
      </h5>
    </motion.div>
  );
}

export default NotFound;
