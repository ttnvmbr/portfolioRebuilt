import React from "react";
import ProjectContainer from "../ProjectContainer/Component";
import AnimatedText from "../AnimatedText/Component";
import { projectData } from "./projectData";

function Projects() {
  return (
    <div
      id="Projects"
      className="w-screen text-baseLight text-center flex items-center flex-col h-screen justify-center"
    >
      <AnimatedText
        text="Projects"
        classes="font-parklane text-4xl lg:text-6xl mb-6"
      />
      <ProjectContainer data={projectData} />
    </div>
  );
}

export default Projects;
