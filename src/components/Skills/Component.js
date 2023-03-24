import React from "react";
import AnimatedText from "../AnimatedText/Component";
import ToggleList from "../ToggleList/Component";
import { skillData } from "./skillData";

export function Skills() {
  return (
    <div
      id="skills"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col h-screen"
    >
      <AnimatedText
        text="Skills"
        classes="font-parklane text-4xl lg:text-6xl"
      />

      <p className="text-2xl mb-4 text-baseMid">
        View my
        <a
          className="pl-1 text-baseGreen underline underline-offset-2 hover:text-baseGreenDark"
          href="/"
        >
          curriculum vitae
        </a>
      </p>
      <ToggleList toggleData={skillData} />
    </div>
  );
}
export default Skills;
