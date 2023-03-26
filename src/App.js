import React, { useState } from "react";
import Navigation from "./components/Navigation/Component";
import Home from "./components/Home/Component";
import About from "./components/About/Component";
import Skills from "./components/Skills/Component";
import Projects from "./components/Projects/Component";
import Contact from "./components/Contact/Component";
import LanguageSwitch from "./components/LanguageSwitch/Component";

function App() {
  const [currentLanguage, setcurrentLanguage] = useState("en");
  return (
    <>
      <Navigation currentLanguage={currentLanguage} />
      <Home currentLanguage={currentLanguage} />
      <About currentLanguage={currentLanguage} />
      <Projects currentLanguage={currentLanguage} />
      <Skills currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
      <LanguageSwitch
        currentLanguage={currentLanguage}
        setDutch={() => setcurrentLanguage("nl")}
        setEnglish={() => setcurrentLanguage("en")}
      />
    </>
  );
}

export default App;
