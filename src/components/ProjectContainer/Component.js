import React, { useState } from "react";

function ProjectContainer(props) {
  const [currentTab, setcurrentTab] = useState(props.data[0]);
  return (
    <div className="w-3/4 bg-baseGreenDark h-2/3 rounded-lg max-w-4xl flex items-end relative">
      <div className="w-full h-[95%] bg-baseGreen rounded-b-lg">
        <div className="w-32 h-[5%] bg-baseGreen rounded-t-lg absolute top-0 flex justify-start items-center">
          <img src={currentTab.image} className="ml-4 w-4 h-4" />
          <p className="ml-2">{currentTab.title}</p>
        </div>
        <div className="absolute top-0 left-32 flex w-1/2 h-full justify-around md:justify-start">
          {props.data.map((item, index) => {
            if (item === currentTab) {
              return;
            } else {
              return (
                <button
                  onClick={() => setcurrentTab(item)}
                  className="h-[5%] flex items-center md:w-32 hover:bg-white/[0.10] rounded-t-lg"
                >
                  <div className="flex justify-start w-full items-center h-full">
                    <img src={item.image} className="ml-4 w-4 h-4" />
                    <p className="ml-2">{item.title}</p>
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
        <p className="ml-4 text-baseBlack">{`localhost:3000/${currentTab.title.toLowerCase()}`}</p>
      </div>
      <div className=" w-full absolute h-[85%] overflow-y-auto">
        {currentTab.projects.map((projectItem) => {
          return (
            <div className="flex flex-col text-left p-5">
              <h1 className="text-baseBlack text-4xl mb-1">
                {projectItem.title}
              </h1>
              <div className="grid grid-flow-col w-fit gap-2">
                {projectItem.tags.map((tag) => {
                  return (
                    <div className=" p-2 bg-baseGreenDark rounded-lg h-6 flex justify-center items-center mb-1 font-lgc">
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </div>
              <img className=" max-h-96 w-auto" src={projectItem.image}></img>
              <p className="text-baseBlack font-lgc text-sm py-2">
                {projectItem.description}
              </p>
              <div className="grid gap-2 grid-flow-col w-fit">
                {projectItem.links.map((linkItem) => {
                  return (
                    <a
                      className="h-fit bg-baseMid hover:bg-baseDark max-w-fit p-2 font-lgc flex justify-center items-center text-center rounded-lg text-mid md:text-lg"
                      href={linkItem.link}
                    >
                      {linkItem.linkText}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectContainer;
