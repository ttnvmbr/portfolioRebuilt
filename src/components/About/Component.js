import React from "react";
import AnimatedText from "../AnimatedText/Component";
import FileContainer from "../FileContainer/Component";
import IntroductionFileContainer from "../IntroductionFileContainer/Component";

function About() {
  return (
    <div
      id="about"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col min-h-screen"
    >
      <AnimatedText
        text="About"
        classes="font-parklane text-4xl lg:text-6xl mb-6"
      />

      <div className="flex flex-col p-4 w-full md:w-3/4 lg:w-1/2 lg:justify-center items-center lg:flex-row max-w-md lg:max-w-3xl">
        <FileContainer left />
        <FileContainer />
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 max-w-md lg:max-w-2xl">
        <IntroductionFileContainer />
      </div>
    </div>
  );
}
export default About;
