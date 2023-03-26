import React from "react";

export function LanguageSwitch(props) {
  return (
    <div className="fixed font-lgc top-0 right-0 w-20 h-12 border-2 border-baseLight rounded-bl-lg flex justify-center items-center">
      <button
        onClick={props.setDutch}
        className={`w-8 h-6 flex justify-center ${
          props.currentLanguage === "nl"
            ? " underline underline-offset-2 text-baseMid"
            : "hover:text-baseMid"
        }`}
      >
        NL
      </button>
      <div className="w-0.5 h-5 bg-baseLight"></div>
      <button
        onClick={props.setEnglish}
        className={`w-8 h-6 flex justify-center ${
          props.currentLanguage === "en"
            ? " underline underline-offset-2 text-baseMid"
            : "hover:text-baseMid"
        }`}
      >
        EN
      </button>
    </div>
  );
}
export default LanguageSwitch;
