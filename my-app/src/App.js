import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Lightbox from "./Components/Lightbox";
import { LightboxProvider } from "./Components/util/useLightbox";
import Display from "./Components/Display";

export const LightboxContext = React.createContext();
export const ResultContext = React.createContext();

function App() {
  const [result, setResult] = useState({});
  return (
    <LightboxProvider>
      <ResultContext.Provider value={{ result, setResult }}>
        <Lightbox>
          <Display todo={result} />
        </Lightbox>
        <div id="page" className="App">
          <NavBar />
          <Content />
        </div>
      </ResultContext.Provider>
    </LightboxProvider>
  );
}

export default App;
