import React from "react";
import ProjectsContainer from "../ProjectsContainer/Component";
import AnimatedText from "../AnimatedText/Component";
import { projectData } from "./projectData";

function Projects(props) {
  return (
    <div
      id="projects"
      className="w-screen text-baseLight text-center flex items-center flex-col min-h-screen justify-center py-40"
    >
      <AnimatedText
        text={props.currentLanguage === "en" ? "Projects" : "Projecten"}
        classes="font-parklane text-4xl lg:text-6xl"
      />
      <div className="flex flex-wrap text-baseMid text-xl md:text-2xl mb-6 px-4 justify-center">
        <p>
          {props.currentLanguage === "en"
            ? "*Scroll through my projects"
            : "*Scroll door mijn projecten"}
        </p>
        <p className="ml-1">
          {props.currentLanguage === "en" ? "or pick" : "of kies een"}
        </p>
        <p className="ml-1">
          {props.currentLanguage === "en" ? "another tab*" : "ander tabblad*"}
        </p>
      </div>

      <ProjectsContainer
        data={projectData}
        currentLanguage={props.currentLanguage}
      />
    </div>
  );
}

export default Projects;
