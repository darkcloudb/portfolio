import kapstone from "../img/secondChapter.png";
import kwitter from "../img/kwitter.png";
import codepen from "../img/codepen.png";
import bot from "../img/discordBot.png";

function secondChapter() {
  window.open("https://efgon.github.io/kapstone-frontend-book-resale/");
}
function CoachIn() {
  window.open("https://kenzie-se-q2.github.io/kwitter-medimond/");
}

function whatToEat() {
  window.open("https://codepen.io/Birii/full/zYKabBN");
}

function discord_bot() {
  window.open("https://github.com/darkcloudb/confused_astronaut");
}

export const projectArray = [
  {
    image: kapstone,
    title: "Second Chapter",
    text: " A full stack website created with 3 others for a school project. Created using HTML, CSS, JavaScript, React, Zustand, Bootstrap, and MongoDB.",
    button: "See Live",
    click: secondChapter,
  },
  {
    image: kwitter,
    title: "CoachIn",
    text: "A social media site with working message board and Google Login. Created using JavaScript, React, Zustand, and Bootstrap.",
    button: "See Live",
    click: CoachIn,
  },
  {
    image: codepen,
    title: "What to eat?",
    text: "A fun webpage with a button to determine what to eat. Made with JavaScript on Codepen.",
    button: "See Live",
    click: whatToEat,
  },
  {
    image: bot,
    title: "confused_astronaut",
    text: "Create a useful bot for discord to post daily schedules and other important information upon command. Made with Python.",
    button: "Learn More",
    click: discord_bot,
  },
];
