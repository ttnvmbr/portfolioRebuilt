import React from "react";
import Star from "../../svg/Star";
import AnimatedText from "../AnimatedText/Component";
import ToggleList from "../ToggleList/Component";
import { motion } from "framer-motion";

export function Skills() {
  const toggles = {
    Languages: [
      "JavaScript",
      "HTML",
      "CSS",
      "TypeScript",
      "C#",
      "PHP",
      "SQL",
      "GraphQL",
    ],
    "Frameworks/Game-engines": [
      "React",
      "Unity",
      "NextJS",
      "ML5JS",
      "ThreeJS",
      "Laravel",
      "Tailwind",
      "Bootstrap",
    ],
    "Tools/Other": ["Scrum", "Jira", "Git", "Figma", "Trello", "Miro"],
  };

  return (
    <div
      id="skills"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col min-h-screen"
    >
      <div className="flex items-baseline justify-center mb-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 3 },
          }}
          end={{ opacity: 1 }}
          className=" w-1/12"
          whileHover={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 1.5 },
          }}
        >
          <Star />
        </motion.div>
        <AnimatedText
          text="Skills"
          classes="font-parklane text-4xl lg:text-6xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 3 },
          }}
          end={{ opacity: 1 }}
          whileHover={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 1.5 },
          }}
          className=" w-1/12"
        >
          <Star />
        </motion.div>
      </div>
      <p className="text-xl mb-4 text-baseMid">
        View my
        <a
          className="pl-1 text-baseGreen underline underline-offset-2 hover:text-baseGreenDark"
          href=""
        >
          curriculum vitae
        </a>
      </p>
      <ToggleList toggles={toggles} />
    </div>
  );
}
export default Skills;
