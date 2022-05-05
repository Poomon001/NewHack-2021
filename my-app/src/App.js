import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Lightbox from "./Components/Lightbox";
import { LightboxProvider } from "./Components/util/useLightbox";
import Display from "./Components/Display";
import { ResultProvider } from "./Components/util/useResult";

export const ResultContext = React.createContext();

function App() {
  return (
    <LightboxProvider>
      <ResultProvider>
        <Lightbox>
          <Display />
        </Lightbox>
        <NavBar />
        <Content />
      </ResultProvider>
    </LightboxProvider>
  );
}

export default App;
