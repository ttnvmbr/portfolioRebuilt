import React from "react";
import AnimatedText from "../AnimatedText/Component";
import FileContainer from "../FileContainer/Component";
import IntroductionFileContainer from "../IntroductionFileContainer/Component";

function About(props) {
  return (
    <div
      id="about"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col min-h-screen"
    >
      <AnimatedText
        text={props.currentLanguage === "en" ? "About" : "Over"}
        classes="font-parklane text-4xl lg:text-6xl mb-6"
      />

      <div className="flex flex-col p-4 w-full md:w-3/4 lg:w-1/2 lg:justify-center items-center lg:flex-row max-w-md lg:max-w-3xl">
        <FileContainer left currentLanguage={props.currentLanguage} />
        <FileContainer currentLanguage={props.currentLanguage} />
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 max-w-md lg:max-w-2xl">
        <IntroductionFileContainer currentLanguage={props.currentLanguage} />
      </div>
    </div>
  );
}
export default About;
