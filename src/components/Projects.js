import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

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
    <>
      <h2>
        Projects <FontAwesomeIcon icon={faJsSquare} />{" "}
        <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faPython} />{" "}
        <FontAwesomeIcon icon={faNodeJs} />{" "}
      </h2>
      <div className="project">
        <Card
          style={{
            width: "30rem",
            height: "25rem",
            marginBottom: "20px",
            // marginLeft: "200px",
            // marginReft: "200px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Second Chapter</Card.Title>
            <Card.Text>
              Quality Assurance, co-developed the backend architecture, set up
              CRUD requests to backend restful API, presented and tested the
              minimal viable product to stakeholders. Created using HTML, CSS,
              JavaScript, React, Zustand, Bootstrap, and MongoDB.
            </Card.Text>
            <Button variant="secondary" onClick={secondChapter}>
              Go to Second Chapter
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "30rem",
            height: "25rem",
            marginBottom: "20px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>CoachIn</Card.Title>
            <Card.Text>
              Project Manager leading a team of 4 to meet minimal viable product
              requirements, co-developed the frontend architecture, set up CRUD
              requests to restful APIs, presented the minimal viable product to
              stakeholders. Created using JavaScript, React, Zustand, and
              Bootstrap.
            </Card.Text>
            <Button variant="secondary" onClick={CoachIn}>
              Go to CoachIn
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "30rem",
            height: "25rem",
            marginBottom: "20px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Demo Project</Card.Title>
            <Card.Text>
              4 day project. Co-created a game on the RPG Maker MV platform with
              a focus on combat systems, characters, and enemy AI. Presented a
              demo project to stakeholders. Created with JavaScript.
            </Card.Text>
            <Button
              style={{ marginRight: "8px" }}
              variant="secondary"
              onClick={DemoProjectMac}
            >
              Download Mac Ver.
            </Button>
            <Button variant="secondary" onClick={DemoProjectPC}>
              Download Win Ver.
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "30rem",
            height: "25rem",
            marginBottom: "20px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>What to eat?</Card.Title>
            <Card.Text>
              A fun webpage with a button to determine what to eat.
            </Card.Text>
            <Button variant="secondary" onClick={whatToEat}>
              Go to site
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "30rem",
            height: "25rem",
            marginBottom: "20px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>confused_astronaut</Card.Title>
            <Card.Text>
              Create a useful bot for discord to post daily schedules and other
              important information upon command.
            </Card.Text>
            <Button variant="secondary" onClick={discord_bot}>
              Bot's code
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Projects;
