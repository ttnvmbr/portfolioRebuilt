import { CgGames, CgWebsite, CgMoreVerticalO } from "react-icons/cg";
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
    titleNl: "Games",
    icon: <CgGames className="text-baseMid" />,
    projects: [
      {
        title: "I Won't Forget Hue",
        tags: ["Unity 3D", "C#", "AI"],
        image: iwfhBanner,
        links: [
          {
            link: "https://store.steampowered.com/app/2236880/I_Wont_Forget_Hue/",
            linkText: "view on Steam",
            linkTextNl: "bekijk op Steam",
          },
          {
            link: "https://hostile-kiwi-games.itch.io/i-wont-forget-hue",
            linkText: "view on Itch.io",
            linkTextNl: "bekijk op Itch.io",
          },
          {
            link: "https://youtu.be/Wdaat_QP430",
            linkText: "watch the making of",
            linkTextNl: "bekijk het productieproces",
          },
        ],
        description:
          "I Won’t Forget Hue is a first-person, psychedelic thriller game. This game was commissioned by the Game Design & Development minor program and was produced in only fourteen weeks by a multidisciplinary team of seventeen students functioning as a game studio, which I was proudly part of. My contribution consisted mostly of developing the enemy AI and its behavior.",
        descriptionNl:
          "I Won't Forget Hue is een first-person, psychedelische thrillergame. Dit spel is in opdracht van de minor Game Design & Development gemaakt in slechts veertien weken door een multidisciplinair team van zeventien studenten die als gamestudio functioneerden, waar ik met trots deel van uitmaakte. Mijn bijdrage bestond vooral uit het ontwikkelen van de AI vijand en zijn gedrag.",
      },
      {
        title: "Rat Soup",
        tags: ["Unity 2.5D", "C#"],
        image: ratSoupBanner,
        links: [
          {
            link: "https://pappilots.itch.io/rat-soup",
            linkText: "view on Itch.io",
            linkTextNl: "bekijk op Itch.io",
          },
        ],
        description:
          "Rat Soup is a 2.5D merge and collect mobile game. This game was commissioned by the Game Design & Development minor program and was produced in only four weeks by a multidisciplinary team of six students functioning as a game studio, which I was proudly part of. As one of only three developers, I contributed in a large part of the development process of the game. I focused on designing and developing a way to efficiently store and retrieve all game data that made it easier to manage for both the developers and designers.",
        descriptionNl:
          "Rat Soup is een 2.5D merge and collect mobile game. Dit spel is in opdracht van de minor Game Design & Development gemaakt in slechts vier weken door een multidisciplinair team van zes studenten die als gamestudio functioneerden, waar ik met trots deel van uitmaakte. Als een van de slechts drie ontwikkelaars heb ik een groot deel van het ontwikkelingsproces van het spel voor mijn rekening genomen. Ik richtte me op het ontwerpen en ontwikkelen van een manier om alle spelgegevens efficiënt op te slaan en terug te vinden, zodat het makkelijker te beheren was voor zowel de ontwikkelaars als de ontwerpers.",
      },
      {
        title: "Cards VS Alice",
        tags: ["Minimax algorithm", "AI", "TypeScript"],
        image: cvsa,
        links: [
          {
            link: "https://github.com/ttnvmbr/cardsVSalice",
            linkText: "view the code",
            linkTextNl: "bekijk de code",
          },
          {
            link: "https://cardsvsalice.netlify.app/",
            linkText: "view the demo",
            linkTextNl: "bekijk de demo",
          },
        ],
        description:
          "As part of an assignment commissioned by the Creative Media & Game Technologies program, I implented the minimax algorithm on a simple game where the objective is to get Alice to the other side of the board. The cards use the minimax algorithm to anticipate on Alice's next move in order to catch Alice before she makes it to the other side of the board. Alice moves as the king in a chess game, while the cards move as the knights. ",
        descriptionNl:
          "Als onderdeel van een opdracht van het Creative Media & Game Technologies programma heb ik het minimax algoritme toegepast op een eenvoudig spel waarbij het doel is Alice naar de andere kant van het bord te krijgen. De kaarten gebruiken het minimax algoritme om te anticiperen op de volgende zet van Alice om Alice te vangen voordat ze de andere kant van het bord bereikt. Alice beweegt als de koning in een schaakspel, terwijl de kaarten bewegen als de ridders. ",
      },
    ],
  },
  {
    title: "Web",
    titleNl: "Web",
    icon: <CgWebsite className="text-baseDark" />,
    projects: [
      {
        title: "Twee Druppels Water",
        tags: ["Three.js", "React.js", "Tailwind"],
        image: druppels,
        links: [
          {
            link: "https://tweedruppelswater.netlify.app/",
            linkText: "view the demo",
            linkTextNl: "bekijk de demo",
          },
          {
            link: "https://github.com/ttnvmbr/tweedruppelswater",
            linkText: "view the code",
            linkTextNl: "bekijk de demo",
          },
        ],
        description:
          "Twee Druppels Water is an application that mainly focuses on increasing user awareness of drinking water and the added value of tap water, by contrasting the differences in four different ways. This application was made as part of an assignment commissioned by the Creative Media & Game Technologies program in assosiciation with Oasen Drinkwater.",
        descriptionNl:
          "Twee druppels water is een applicatie die zich vooral richt op het vergroten van het bewustzijn van de gebruiker over drinkwater en de toegevoegde waarde van kraanwater, door de verschillen op vier verschillende manieren tegenover elkaar te zetten. Deze applicatie is gemaakt in het kader van een opdracht van de opleiding Creative Media & Game Technologies in samenwerking met Oasen Drinkwater.",
      },
      {
        title: "Ella Bella Creations",
        tags: ["Next.js", "Sanity", "Tailwind"],
        image: ebc,
        links: [
          {
            link: "https://ellabellacreations.nl/",
            linkText: "visit the website",
            linkTextNl: "bezoek de website",
          },
        ],
        description:
          "Ella Bella Creations is a new and unique fashionbrand. I designed and developed the website. I used Sanity to build a customized CMS to allow Ella Bella Creations to easily manage all of their content themselves.",
        descriptionNl:
          "Ella Bella Creations is een nieuw en uniek kledingmerk. Ik heb de website ontworpen en geprogrammeerd. Ik heb Sanity gebruikt om een op maat gemaakt CMS te realizeren, zodat Ella Bella Creations zelf gemakkelijk hun content kunnen beheren.",
      },
      {
        title: "Divorce Prediction",
        tags: ["ML5.js", "JavaScript", "Decision tree"],
        image: divorePrediction,
        links: [
          {
            link: "https://github.com/ttnvmbr/Divorce-prediction-ML5",
            linkText: "view the code",
            linkTextNl: "bekijk de code",
          },
          {
            link: "https://divorceprediction.netlify.app/",
            linkText: "view the demo",
            linkTextNl: "bekijk de demo",
          },
        ],
        description:
          "Divorce Prediction is a test consisting of three questions that predicts if a relationship will last or not (for entertainment purposes only). This test was made as part of an assignment commissioned by the Creative Media & Game Technologies program about desicion trees. I made the test based on the outcome of a decision tree that I trained on a Kaggle dataset that contains data about 150 couples with their corresponding Divorce Predictors Scale variables (DPS) on the basis of Gottman couples therapy.",
        descriptionNl:
          "Divorce prediction is een test bestaande uit drie vragen die voorspelt of een relatie stand zal houden of niet (uitsluitend bedoeld voor amusement). Deze test is gemaakt als onderdeel van een opdracht van de opleiding Creative Media & Game Technologies over decision trees. Ik heb de test gebaseerd op de uitkomst van de decision tree die ik heb getrained op een Kaggle dataset die data bevatte van 150 koppels met bijbehorende 'Divorce Predictors Scale variables (DPS)' die zijn gebaseerd op de methoden van Gottman voor relatietherapie.",
      },
      {
        title: "Co-Connect",
        tags: ["PHP", "JavaScript", "Bootstrap"],
        image: coconnect,
        links: [
          {
            link: "https://github.com/ttnvmbr/CoConnect",
            linkText: "view the code",
            linkTextNl: "bekijk de code",
          },
        ],
        description:
          "Co-Connect is an application that can be easily implemented in any company to serve as general HR policy. This application was made as part of an assignment commissioned by the Creative Media & Game Technologies program in association with Ed van Dijken (director and HR coordinator). As one of the five students who developed this app, I mainly worked on the concepting, designing and researching process and on developing the diary part of the application and the styling.",

        descriptionNl:
          "Co-Connect is een gemakkelijk te implementeren applicatie, die kan dienen als algemeen hr-beleid binnen een bedrijf. De applicatie is gemaakt als onderdeel van een opdracht van de opleiding Creative Media & Game Technologies in samenwerking met Ed van Dijken (directeur en HR-coördinator). Als een van de vijf studenten die deze app hebben ontwikkeld, heb ik vooral gewerkt aan het concept-, ontwerp- en onderzoeksproces en aan de ontwikkeling van het dagboekgedeelte van de applicatie en de styling.",
      },
    ],
  },
  {
    title: "other",
    titleNl: "overig",
    icon: <CgMoreVerticalO className="text-baseBrown" />,
    projects: [
      {
        title: "HeelTech",
        tags: ["Hardware"],
        image: heelTech,
        links: [
          {
            link: "https://youtu.be/8OH_mraAy1g",
            linkText: "view video",
            linkTextNl: "bekijk de video",
          },
        ],
        description:
          "HeelTech are heels that generate and store energy by walking to charge your phone with. I made them as part of a project commissioned by the Creative Media & Game Technologies program. The project consisted of concepting, researching, designing and developing an innovative appliance or application.",
        descriptionNl:
          "HeelTech zijn hakken die door te lopen energie opwekken en opslaan om je telefoon mee op te laden. Ik heb ze gemaakt als onderdeel van een project voor de opleiding Creative Media & Game Technologies. Het project bestond uit het bedenken, onderzoeken, ontwerpen en ontwikkelen van een innovatief apparaat of toepassing.",
      },
      {
        title: "Schijtprullenbak",
        tags: ["Google Teachable Machine", "Arduino", "Hardware"],
        image: SchijtPrullenbak,
        links: [
          {
            link: "https://youtu.be/8dQuaXoLPQI",
            linkText: "view video",
            linkTextNl: "bekijk de video",
          },
        ],
        description:
          "The Schijtprullenbak is a smart recycle bin separates waste by itself with the use of AI. It also helps to create awareness about the importance of separating waste by telling the user in which bin the waste item is disposed. This product was part of an assignment commissioned by the Creative Media & Game Technologies program. As part of a team of five students, I contributed mainly by researching, designing and placing the hardware.",
        descriptionNl:
          "De schijtprullenbak is een zelfscheidende prullenbak met AI. Om meer bewustzijn voor het belang van het scheiden van te creëren krijgt de gebruiker na het weggooien te horen onder welke categorie het weggegooide product valt. Dit product is gemaakt als onderdeel van een opdracht van de opleiding Creative Media & Game Technologies. Als een van de vijf leerlingen uit het team, heb ik voornamelijk bijgedragen aan het onderzoeken, ontwerpen en het plaatsen van de hardware.",
      },
      {
        title: "Hete Liefde met Koude Robots",
        tags: ["Essay", "AI", "Research"],
        image: robot,
        links: [
          {
            link: "https://inciyesiltepe.medium.com/hete-liefde-met-koude-robots-1f0e400bff9b",
            linkText: "view essay",
            linkTextNl: "bekijk het verslag",
          },
        ],
        description:
          "Hete Liefde met Koude Robots is a research paper on the possible future relationship between humans and AI. This paper was commissioned by the Creative Media & Game Technologies program.",
        descriptionNl:
          "Hete Liefde met Koude Robots is een onderzoeksverslag over de mogelijke toekomstige relatie tussen mens en AI. Het verslag is geschreven in opdracht van de opleiding Creative Media & Game Technologies.",
      },
    ],
  },
];
