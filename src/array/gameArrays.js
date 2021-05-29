import demo from "../img/Demo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows } from "@fortawesome/free-brands-svg-icons";

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

export const gameArrays = [
  {
    image: demo,
    title: "Demo Project",
    text: "Demo game co-created with JavaScript and RPG Maker MV.",
    mac: <FontAwesomeIcon icon={faApple} />,
    clickMac: DemoProjectMac,
    win: <FontAwesomeIcon icon={faWindows} />,
    clickWin: DemoProjectPC,
  },
];
