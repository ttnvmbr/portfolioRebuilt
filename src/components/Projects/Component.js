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
        classes="font-parklane text-4xl lg:text-6xl mb-6"
      />
      <ProjectsContainer
        data={projectData}
        currentLanguage={props.currentLanguage}
      />
    </div>
  );
}

export default Projects;
