import React, { useState } from "react";
import Project from "../Project/Component";

function ProjectsContainer(props) {
  const [currentTab, setcurrentTab] = useState(props.data[0]);
  return (
    <div className="w-3/4 bg-baseGreenDark h-2/3 rounded-lg max-w-4xl flex items-end relative">
      <div className="w-full h-[95%] bg-baseGreen rounded-b-lg">
        <div className="w-32 h-[5%] bg-baseGreen rounded-t-lg absolute top-0 flex justify-start items-center">
          <div className="ml-4 w-4 h-4">{currentTab.icon}</div>
          <p className="ml-2">
            {props.currentLanguage === "en"
              ? currentTab.title
              : currentTab.titleNl}
          </p>
        </div>
        <div className="absolute top-0 left-32 flex w-1/2 h-full justify-around md:justify-start">
          {props.data.map((item) => {
            if (item === currentTab) {
              return null;
            } else {
              return (
                <button
                  onClick={() => setcurrentTab(item)}
                  className="h-[5%] flex items-center md:w-32 hover:bg-white/[0.10] rounded-t-lg"
                >
                  <div className="flex justify-start w-full items-center h-full">
                    <div className="ml-4 w-4 h-4">{item.icon}</div>
                    <p className="ml-2">
                      {props.currentLanguage === "en"
                        ? item.title
                        : item.titleNl}
                    </p>
                  </div>
                  <div className="flex justify-end w-full items-center h-full">
                    <div className="right-0 text-2xl bg-baseBlack w-[0.1px] h-5 ml-4"></div>
                  </div>
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="bg-baseLight w-[95%] absolute h-8 rounded-2xl top-[5.5%] -translate-x-1/2 left-1/2 flex items-center">
        <p className="ml-4 text-baseBlack">{`localhost:3000/${
          props.currentLanguage === "en"
            ? currentTab.title.toLowerCase()
            : currentTab.titleNl.toLowerCase()
        }`}</p>
      </div>
      <div className=" w-full absolute h-[85%] overflow-y-auto">
        {currentTab.projects.map((projectItem) => {
          return (
            <Project
              title={projectItem.title}
              description={
                props.currentLanguage === "en"
                  ? projectItem.description
                  : projectItem.descriptionNl
              }
              image={projectItem.image}
              tags={projectItem.tags}
              links={projectItem.links}
              currentLanguage={props.currentLanguage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsContainer;
