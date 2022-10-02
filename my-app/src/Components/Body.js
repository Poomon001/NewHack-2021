import NavBar from "./NavBar";
import Content from "./Content";
import React, { useState } from "react";
import Alert from "./Alert";
import { useAlert } from "./util/useAlert";

function Body() {
  const [aboutRef, setAboutRef] = useState(null);
  const [instructionRef, setInstructionRef] = useState(null);
  const isAlert = useAlert().alert;

  const scroll = (e, ref) => {
    console.log(ref);
    e.preventDefault();
    window.scrollTo({
      behavior: "smooth",
      top: ref?.current?.getBoundingClientRect().top,
    });
  };
  return (
    <section id="body">
      {isAlert && <Alert />}
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
