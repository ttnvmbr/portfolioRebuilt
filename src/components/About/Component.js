import React from "react";
import AnimatedText from "../AnimatedText/Component";
import File from "../../svg/File";
import File2 from "../../svg/File2";
import { VscCode } from "react-icons/vsc";
import { IoSchoolOutline } from "react-icons/io5";
import { GrBlockQuote } from "react-icons/gr";
import FrameContainer from "../FrameContainer/Component";
import FrameFlipContainer from "../FrameFlipContainer/Component";
import Plant from "../../svg/Plant";
import FileContainer from "../FileContainer/Component";

function About(props) {
  return (
    <div
      id="about"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col"
    >
      <AnimatedText
        text="About"
        classes="font-parklane text-4xl lg:text-6xl mb-4"
      />
      {/* <div className="flex flex-col p-4 w-full lg:justify-center items-center lg:flex-row">
        <FrameContainer
          icon={<IoSchoolOutline />}
          text1="Final-year student Creative Media & Game Technologies"
          text2="Rotterdam University  of Applied Sciences"
          left={true}
        />
        <FrameContainer
          icon={<VscCode />}
          text1="Agile development"
          text2="Front-end, AI & game"
        />
      </div>
      <FrameFlipContainer
        icon={<GrBlockQuote />}
        text="Create technology  along with  empathy,  creativity &  ethical responsibility"
      /> */}

      <div className="flex flex-col p-4 w-full md:w-3/4 lg:w-1/2 lg:justify-center items-center lg:flex-row">
        <FileContainer left />
        <FileContainer />
      </div>
    </div>
  );
}
export default About;
