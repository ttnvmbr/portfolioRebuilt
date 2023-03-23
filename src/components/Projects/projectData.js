import gameIcon from "../../img/gameIcon.png";
import webIcon from "../../img/webIcon.png";
import otherIcon from "../../img/otherIcon.png";
import ratSoupBanner from "../../img/ratSoupBanner.png";
import iwfhBanner from "../../img/iwfhBanner.png";
import ebc from "../../img/ebc.png";
import coconnect from "../../img/coconnect.jpg";
import druppels from "../../img/2druppels.png";
import divorePrediction from "../../img/divorePrediction.jpg";
import heelTech from "../../img/heeltech.png";
import SchijtPrullenbak from "../../img/schijtprul.jpeg";
import cvsa from "../../img/cvsa.png";

export const projectData = [
  {
    title: "Games",
    image: gameIcon,
    projects: [
      {
        title: "I Won't Forget Hue",
        tags: ["Unity 3D", "C#"],
        image: iwfhBanner,
        links: [
          {
            link: "https://store.steampowered.com/app/2236880/I_Wont_Forget_Hue/",
            linkText: "view on Steam",
          },
          {
            link: "https://hostile-kiwi-games.itch.io/i-wont-forget-hue",
            linkText: "view on Itch.io",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Rat Soup",
        tags: ["Unity 2D", "C#"],
        image: ratSoupBanner,
        links: [
          {
            link: "https://pappilots.itch.io/rat-soup",
            linkText: "view on Itch.io",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Cards VS Alice",
        tags: ["Minimax algorithm", "JavaScript"],
        image: cvsa,
        links: [
          {
            link: "",
            linkText: "tbd",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    title: "Web",
    image: webIcon,
    projects: [
      {
        title: "Two Drops of Water",
        tags: ["Three.js", "React.js", "Tailwind"],
        image: druppels,
        links: [
          {
            link: "https://tweedruppelswater.netlify.app/",
            linkText: "view the demo",
          },
          {
            link: "https://github.com/ttnvmbr/tweedruppelswater",
            linkText: "view the code",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Ella Bella Creations",
        tags: ["Next.js", "Sanity", "Tailwind"],
        image: ebc,
        links: [
          {
            link: "https://ellabellacreations.nl/",
            linkText: "visit the website",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Divorce Prediction",
        tags: ["ML5.js", "JavaScript", "Decision tree"],
        image: divorePrediction,
        links: [
          {
            link: "https://github.com/ttnvmbr/Divorce-prediction-ML5",
            linkText: "view the code",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Co-Connect",
        tags: ["PHP", "JavaScript", "Bootstrap"],
        image: coconnect,
        links: [
          {
            link: "https://github.com/ttnvmbr/CoConnect",
            linkText: "view the code",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    title: "other",
    image: otherIcon,
    projects: [
      {
        title: "HeelTech",
        tags: ["Hardware"],
        image: heelTech,
        links: [
          {
            link: "https://youtu.be/8OH_mraAy1g",
            linkText: "view video",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "SchijtPrullenbak",
        tags: ["Google Teachable Machine", "Arduino", "Hardware"],
        image: SchijtPrullenbak,
        links: [
          {
            link: "https://youtu.be/8dQuaXoLPQI",
            linkText: "view video",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
];
