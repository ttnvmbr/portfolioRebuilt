import React from "react";
import AnimatedText from "../AnimatedText/Component";
import { VscCode } from "react-icons/vsc";
import { IoSchoolOutline } from "react-icons/io5";
import { GrBlockQuote } from "react-icons/gr";
import FrameContainer from "../FrameContainer/Component";
import FrameFlipContainer from "../FrameFlipContainer/Component";
import Plant from "../../svg/Plant";

function About(props) {
  return (
    <div
      id="about"
      className="w-screen text-baseLight text-center relative flex justify-center items-center flex-col"
    >
      <AnimatedText text="About" classes="font-parklane text-4xl lg:text-6xl" />
      <div className="flex flex-col p-4 w-full lg:justify-center items-center lg:flex-row">
        <FrameContainer
          icon={<IoSchoolOutline />}
          text1=" Third year student Creative Media & Game Technologies"
          text2=" Rotterdam University of Applied Science"
          left={true}
        />
        <FrameContainer
          icon={<VscCode />}
          text1="Agile development and the basics of UX & UI"
          text2="Websites, mobile applications & games"
        />
      </div>
      <FrameFlipContainer
        icon={<GrBlockQuote />}
        text="    Create technology along with empathy, creativity & ethical responsibility"
      />
      <div className="absolute bottom-[18%] right-[30%] w-40 lg:w-72">
        <Plant />
      </div>
    </div>
  );
}
export default About;
