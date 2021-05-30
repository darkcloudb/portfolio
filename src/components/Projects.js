import React from "react";
import { projectArray } from "../array/projectArrays";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faMdb,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { gameArrays } from "../array/gameArrays";

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
  duration: 2,
};

function Projects() {
  return (
    <div className="projectTitle">
      <motion.h1
        initial="out"
        animate="in"
        exit="out"
        variants={contentAppear}
        transition={effect}
      >
        <FontAwesomeIcon icon={faPython} /> <FontAwesomeIcon icon={faMdb} />{" "}
        Projects : <FontAwesomeIcon icon={faJsSquare} />{" "}
        <FontAwesomeIcon icon={faReact} className="react-spin" />{" "}
        {/* <FontAwesomeIcon icon={faNodeJs} />{" "} */}
      </motion.h1>
      <motion.div
        className="project"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={effect}
      >
        {gameArrays.map((game) => {
          return (
            <Card
              style={{
                width: "25rem",
                height: "30rem",
                margin: "auto",
                alignContent: "space-between",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "#f8f9fa",
              }}
            >
              <Card.Img className="cardImg" variant="top" src={game.image} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.text}</Card.Text>
                <Button
                  style={{ marginRight: "8px" }}
                  variant="secondary"
                  onClick={game.clickMac}
                >
                  Download {game.mac} Ver.
                </Button>
                <Button variant="secondary" onClick={game.clickWin}>
                  Download {game.win} Ver.
                </Button>
              </Card.Body>
            </Card>
          );
        })}
        {projectArray.map((project) => {
          return (
            <Card
              style={{
                width: "25rem",
                height: "30rem",
                marginBottom: "20px",
                marginTop: "5px",
                margin: "auto",
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "#f8f9fa",
              }}
            >
              <Card.Img className="cardImg" variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Button
                  style={{ marginRight: "8px" }}
                  variant="secondary"
                  onClick={project.click}
                >
                  {project.button}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Projects;
