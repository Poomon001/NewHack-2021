import NavBar from "./NavBar";
import Content from "./Content";
import React, { useState } from "react";

function Body() {
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
    <section id="body">
      <NavBar
        scroll={scroll}
        aboutRef={aboutRef}
        instructionRef={instructionRef}
      />
      <Content
        setAboutRef={setAboutRef}
        setInstructionRef={setInstructionRef}
      />
    </section>
  );
}

export default Body;
