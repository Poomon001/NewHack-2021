import DragAndDrop from "./DragAndDrop";
import About from "./About";
import React, { useState } from "react";

const Content = () => {
  return (
    <section className="container">
      <DragAndDrop />
      <About />
    </section>
  );
};

export default Content;
