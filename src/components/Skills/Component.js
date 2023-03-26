import React from "react";
import AnimatedText from "../AnimatedText/Component";
import ToggleList from "../ToggleList/Component";
import { skillData } from "./SkillData";

export function Skills(props) {
  return (
    <div
      id="skills"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col h-screen"
    >
      <AnimatedText
        text={props.currentLanguage === "en" ? "Skills" : "Vaardigheden"}
        classes="font-parklane text-4xl lg:text-6xl"
      />

      <p className="text-2xl mb-4 text-baseMid">
        {props.currentLanguage === "en" ? "View my" : "Bekijk mijn"}
        <a
          className="pl-1 text-baseGreen underline underline-offset-2 hover:text-baseGreenDark"
          href="/"
        >
          curriculum vitae
        </a>
      </p>
      <ToggleList
        toggleData={skillData}
        currentLanguage={props.currentLanguage}
      />
    </div>
  );
}
export default Skills;
