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
import robot from "../../img/robotverslag.jpg";

export const projectData = [
  {
    title: "Games",
    image: gameIcon,
    projects: [
      {
        title: "I Won't Forget Hue",
        tags: ["Unity 3D", "C#", "AI"],
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
          {
            link: "https://youtu.be/Wdaat_QP430",
            linkText: "watch the making of",
          },
        ],
        description:
          "I Won’t Forget Hue is a first-person, psychedelic thriller game. This game has been commisioned by the Game Design & Development minor program and has been produced in only fourteen weeks by a multidisciplinary team of seventeen students functioning as a game studio, which I was proudly part of. My contribution consisted mostly of developping the enemy AI and its behavior.",
      },
      {
        title: "Rat Soup",
        tags: ["Unity 2.5D", "C#"],
        image: ratSoupBanner,
        links: [
          {
            link: "https://pappilots.itch.io/rat-soup",
            linkText: "view on Itch.io",
          },
        ],
        description:
          "Rat Soup is a 2.5D merge and collect mobile game. This game has been commisioned by the Game Design & Development minor program and has been produced in only four weeks by a multidisciplinary team of six students functioning as a game studio, which I was proudly part of. As one of only three developers, I contributed in a large part of the development process of the game. I also designed a way to efficiently store and retrieve all game data that made it easier to manage for both the developpers and designers.",
      },
      {
        title: "Cards VS Alice",
        tags: ["Minimax algorithm", "AI", "TypeScript"],
        image: cvsa,
        links: [
          {
            link: "https://github.com/ttnvmbr/cardsVSalice",
            linkText: "view the code",
          },
          {
            link: "https://cardsvsalice.netlify.app/",
            linkText: "view the demo",
          },
        ],
        description:
          "As part of an assignment commisioned by the Creative Media & Game Technologies program, I implented the minimax algorithm on a simple game where the objective is to get Alice to the other side of the board. The cards use the minimax algorithm to anticipate on Alice's next move in order to catch Alice before she makes it to the other side of the board. Alice moves as the king in a chess game, while the cards move as the knights. ",
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
          "Two drops of water' is an application that mainly focuses on increasing user awareness of drinking water and the added value of tap water, by contrasting the differences in four different ways. This application was made as part of an assignment commisioned by the Creative Media & Game Technologies program in assosiciation with Oasen Drinkwater.",
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
          "Ella Bella Creations is a new and unique fashionbrand. I designed and developed the website. I used Sanity to build a customized CMS to allow Ella Bella Creations to easily manage all of their content themselves.",
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
          {
            link: "https://divorceprediction.netlify.app/",
            linkText: "view the demo",
          },
        ],
        description:
          "Divorce Prediction is a test consisting of three questions that predicts if a relationship will last or not (for entertainment purposes only). This test was made as part of an assignment commisioned by the Creative Media & Game Technologies program about desicion trees. I made the test based on the outcome of a decision tree that I trained on a Kaggle dataset that contains data about 150 couples with their corresponding Divorce Predictors Scale variables (DPS) on the basis of Gottman couples therapy.",
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
          "Co-Connect is an application that can be easily implemented in any company to serve as general HR policy. This application was made as part of an assignment commisioned by the Creative Media & Game Technologies program in association with Ed van Dijken (director and HR coordinator). As one of the five students who developed this app, I mainly worked on the concepting, designing and researching process and on developing the diary part of the application and the styling.",
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
          "HeelTech are heels that generate and store energy by walking to charge your phone with. I made them as part of a project commisioned by the Creative Media & Game Technologies program. The project consisted of concepting, researching, designing and creating an innovative appliance or application.",
      },
      {
        title: "Schijtprullenbak",
        tags: ["Google Teachable Machine", "Arduino", "Hardware"],
        image: SchijtPrullenbak,
        links: [
          {
            link: "https://youtu.be/8dQuaXoLPQI",
            linkText: "view video",
          },
        ],
        description:
          "The Schijtprullenbak is a smart recycle bin separates waste by itself with the use of AI. It also helps to create awareness about the importance of separating waste by telling the user in which bin the waste item is disposed. This product was part of an assignment commisioned by the Creative Media & Game Technologies program. As part of a team of five students, I contributed mainly by researching, designing and placing the hardware.",
      },
      {
        title: "Hete Liefde met Koude Robots",
        tags: ["Essay", "AI", "Research"],
        image: robot,
        links: [
          {
            link: "https://inciyesiltepe.medium.com/hete-liefde-met-koude-robots-1f0e400bff9b",
            linkText: "view essay",
          },
        ],
        description:
          "Hete Liefde met Koude Robots is a research paper on the possible future relationship between humans and AI. This paper was commisioned by the Creative Media & Game Technologies program.",
      },
    ],
  },
];
