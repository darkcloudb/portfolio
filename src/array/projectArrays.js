import kapstone from "../img/secondChapter.png";
import djangogram from "../img/djangogram.png";
import bot from "../img/discordBot.png";
import vndemo from "../img/vn_demo.png";

function secondChapter() {
  window.open("https://efgon.github.io/kapstone-frontend-book-resale/");
}
function djangoGram() {
  window.open("https://limitless-cliffs-34806.herokuapp.com/");
}

function discord_bot() {
  window.open("https://github.com/darkcloudb/confused_astronaut");
}

function sentiSite() {
  window.open("https://darkcloudb.github.io/sentimental-site/");
}

export const projectArray = [
  {
    image: vndemo,
    title: "Sentimental Love",
    text: "Visual Novel created using Ren'Py and Python. Currently a work in progress.",
    button: "See Live",
    click: sentiSite,
  },
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
    image: bot,
    title: "confused_astronaut",
    text: "Create a useful bot for discord to post daily schedules and other important information upon command. Made with Python.",
    button: "Learn More",
    click: discord_bot,
  },
];
