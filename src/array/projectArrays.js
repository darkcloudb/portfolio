import kapstone from "../img/secondChapter.png";
import djangogram from "../img/djangogram.png";
import codepen from "../img/codepen.png";
import bot from "../img/discordBot.png";
import hanoi from "../img/tower.png";

function secondChapter() {
  window.open("https://efgon.github.io/kapstone-frontend-book-resale/");
}
function djangoGram() {
  window.open("https://limitless-cliffs-34806.herokuapp.com/");
}

function whatToEat() {
  window.open("https://codepen.io/Birii/full/zYKabBN");
}

function discord_bot() {
  window.open("https://github.com/darkcloudb/confused_astronaut");
}

function towerOfHanoi() {
  window.open(
    "https://kenzieacademy-students.github.io/se-q1-tower-of-hanoi-darkcloudb/"
  );
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
    image: djangogram,
    title: "DjangoGram",
    text: "A basic Instagram clone created with Python, Django, CSS, and Heroku. Created the Sign Up, Log In, Post Image, Delete Image, Comment, Delete Comment, Like, Unlike, and designed frontend interface.",
    button: "See Live",
    click: djangoGram,
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
  {
    image: hanoi,
    title: "Tower of Hanoi",
    text: "Classic Tower of Hanoi game created with JavaScript, HTML5, and CSS. Co-created with Lindsey Fisher.",
    button: "See Live",
    click: towerOfHanoi,
  },
];
