import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Lightbox from "./Components/Lightbox";
import { LightboxProvider } from "./Components/util/useLightbox";
import Display from "./Components/Display";
import { ResultProvider } from "./Components/util/useResult";

function App() {
  const [homeRef, setHomeRef] = useState(null);
  const [aboutRef, setAboutRef] = useState(null);
  const [instructionRef, setInstructionRef] = useState(null);
  const scroll = (e, ref) => {
    e.preventDefault();
    window.scrollTo({
      behavior: "smooth",
      top: ref?.current?.getBoundingClientRect().top,
    });
  };
  return (
    <div className="App" ref={homeRef}>
      <LightboxProvider>
        <ResultProvider>
          <Lightbox>
            <Display />
          </Lightbox>
          <NavBar
            scroll={scroll}
            aboutRef={aboutRef}
            instructionRef={instructionRef}
            homeRef={homeRef}
          />
          <Content
            setAboutRef={setAboutRef}
            setInstructionRef={setInstructionRef}
          />
        </ResultProvider>
      </LightboxProvider>
    </div>
  );
}

export default App;
