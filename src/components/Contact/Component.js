import React from "react";
import AnimatedText from "../AnimatedText/Component";
import { ContactData } from "./contactData";

export function Contact(props) {
  return (
    <div
      id="contact"
      className="w-screen text-baseLight text-center relative flex  items-center flex-col my-40 h-[40vh]"
    >
      <AnimatedText
        text="Contact"
        classes="font-parklane text-4xl lg:text-6xl"
      />
      <p className="text-2xl text-baseGreen mb-4">
        {props.currentLanguage === "en"
          ? "Let's create together!"
          : "Laten we samenwerken!"}
      </p>
      <div className="flex flex-wrap justify-center">
        {ContactData.map((dataItem) => {
          return (
            <a
              className="w-40 h-14 m-2 flex justify-items-start items-center border-2 border-baseMid hover:border-baseDark rounded-lg bg-baseMid hover:bg-baseDark"
              href={dataItem.link}
            >
              <div className="w-12 h-12">{dataItem.icon}</div>
              <p className="text-left ml-4 text-lg font-lgc">{dataItem.text}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Contact;
