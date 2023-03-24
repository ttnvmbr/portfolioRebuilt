import React from "react";
import ProjectsContainer from "../ProjectsContainer/Component";
import AnimatedText from "../AnimatedText/Component";
import { projectData } from "./projectData";

function Projects() {
  return (
    <div
      id="projects"
      className="w-screen text-baseLight text-center flex items-center flex-col h-screen justify-center"
    >
      <AnimatedText
        text="Projects"
        classes="font-parklane text-4xl lg:text-6xl mb-6"
      />
      <ProjectsContainer data={projectData} />
    </div>
  );
}

export default Projects;
