import React from "react";
import { useState } from "react";

export function ToggleList(props) {
  const [currentActive, setcurrentActive] = useState(
    Object.keys(props.toggleData)[0]
  );

  const [currentActiveList, setcurrentActiveList] = useState(
    props.toggleData[currentActive]
  );

  function toggleActive(newActive) {
    setcurrentActive(newActive);
    setcurrentActiveList(props.toggleData[newActive]);
  }

  return (
    <div className="text-center flex justify-center items-center flex-col w-3/4 max-w-xl">
      <ul className="text-2xl border-baseDark border-2 p-0 rounded-lg w-full grid">
        {Object.keys(props.toggleData).map((toggleKey, index) => {
          return (
            <li>
              <button
                className={`uppercase hover:bg-baseMid w-full p-2 hover:text-baseLight border-baseDark border-2 ${
                  currentActive === toggleKey
                    ? "underline underline-offset-4 bg-baseMid text-baseLight"
                    : "bg-baseNeutral text-baseMid"
                } ${
                  index === 0
                    ? "rounded-t-md"
                    : index === 2
                    ? "rounded-b-md"
                    : ""
                }`}
                onClick={() => toggleActive(toggleKey)}
              >
                {toggleKey}
              </button>
            </li>
          );
        })}
      </ul>

      <ul className="text-2xl grid grid-flow-row gap-2 md:grid-cols-3 grid-cols-2 w-full mt-4">
        {currentActiveList.map((toggleItems) => {
          return (
            <li className="p-2 bg-baseGreenDark rounded-lg h-8 flex justify-center items-center mb-1 font-lgc">
              {toggleItems}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToggleList;
