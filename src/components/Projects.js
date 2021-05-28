import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faApple,
  faWindows,
  faMdb,
} from "@fortawesome/free-brands-svg-icons";
import kapstone from "../img/secondChapter.png";
import kwitter from "../img/kwitter.png";
import codepen from "../img/codepen.png";
import bot from "../img/discordBot.png";
import demo from "../img/Demo2.png";
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
  function secondChapter() {
    window.open("https://efgon.github.io/kapstone-frontend-book-resale/");
  }
  function CoachIn() {
    window.open("https://kenzie-se-q2.github.io/kwitter-medimond/");
  }

  function DemoProjectMac() {
    window.open(
      "https://drive.google.com/file/d/1mK8nOU2Q1aWarZv9_tCp6LG2si_Bzdaf/view"
    );
  }

  function DemoProjectPC() {
    window.open(
      "https://drive.google.com/file/d/1d9aE-i-kzv6oXDuazNaJ06EYCrI0MgNM/view"
    );
  }

  function whatToEat() {
    window.open("https://codepen.io/Birii/full/zYKabBN");
  }

  function discord_bot() {
    window.open("https://github.com/darkcloudb/confused_astronaut");
  }
  return (
    <div className="projectTitle">
      <motion.h1 initial="out" animate="in" exit="out" variants={contentAppear}>
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
          <Card.Img className="cardImg" variant="top" src={demo} />
          <Card.Body>
            <Card.Title>Demo Project</Card.Title>
            <Card.Text>
              Demo game co-created with JavaScript and RPG Maker MV.
            </Card.Text>
            <Button
              style={{ marginRight: "8px" }}
              variant="secondary"
              onClick={DemoProjectMac}
            >
              Download <FontAwesomeIcon icon={faApple} /> Ver.
            </Button>
            <Button variant="secondary" onClick={DemoProjectPC}>
              Download <FontAwesomeIcon icon={faWindows} /> Ver.
            </Button>
          </Card.Body>
        </Card>
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
          <Card.Img className="cardImg" variant="top" src={kapstone} />
          <Card.Body>
            <Card.Title>Second Chapter</Card.Title>
            <Card.Text>
              A full stack website created with 3 others for a school project.
              Created using HTML, CSS, JavaScript, React, Zustand, Bootstrap,
              and MongoDB.
            </Card.Text>
            <Button variant="secondary" onClick={secondChapter}>
              See Live
            </Button>
          </Card.Body>
        </Card>

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
          <Card.Img className="cardImg" variant="top" src={kwitter} />
          <Card.Body>
            <Card.Title>CoachIn</Card.Title>
            <Card.Text>
              A social media site with working message board and Google Login.
              Created using JavaScript, React, Zustand, and Bootstrap.
            </Card.Text>
            <Button variant="secondary" onClick={CoachIn}>
              See Live
            </Button>
          </Card.Body>
        </Card>

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
          <Card.Img className="cardImg" variant="top" src={codepen} />
          <Card.Body>
            <Card.Title>What to eat?</Card.Title>
            <Card.Text>
              A fun webpage with a button to determine what to eat. Made with
              JavaScript on Codepen.
            </Card.Text>
            <Button variant="secondary" onClick={whatToEat}>
              See Live
            </Button>
          </Card.Body>
        </Card>

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
          <Card.Img className="cardImg" variant="top" src={bot} />
          <Card.Body>
            <Card.Title>confused_astronaut</Card.Title>
            <Card.Text>
              Create a useful bot for discord to post daily schedules and other
              important information upon command. Made with Python.
            </Card.Text>
            <Button variant="secondary" onClick={discord_bot}>
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
}

export default Projects;
