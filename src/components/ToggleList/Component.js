import React from "react";
import { useState } from "react";

export function ToggleList(props) {
  const [currentActive, setcurrentActive] = useState(
    Object.keys(props.toggles)[0]
  );

  const [currentActiveList, setcurrentActiveList] = useState(
    props.toggles[currentActive]
  );

  function toggleActive(newActive) {
    setcurrentActive(newActive);
    setcurrentActiveList(props.toggles[newActive]);
  }

  return (
    <div className="text-center flex justify-center items-center flex-col ">
      <ul className="text-2xl lg:flex border-baseMid border-2 p-0">
        {Object.keys(props.toggles).map((toggleKey) => {
          return (
            <li>
              <button
                className={`uppercase p-2 mt-1 hover:text-baseMid ${
                  currentActive === toggleKey
                    ? "text-baseMid underline underline-offset-4"
                    : "text-baseDark"
                }`}
                onClick={() => toggleActive(toggleKey)}
              >
                {toggleKey}
              </button>
            </li>
          );
        })}
      </ul>

      <ul className="text-2xl p-4 text-left">
        {currentActiveList.map((toggleItems) => {
          return <li className=" list-disc">{toggleItems}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToggleList;
