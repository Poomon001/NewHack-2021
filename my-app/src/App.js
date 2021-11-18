import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Lightbox from "./Components/Lightbox";

export const LightboxContext = React.createContext();
export const ResultContext = React.createContext();

function App() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [result, setResult] = useState({});
  return (
    <LightboxContext.Provider value={{ openLightbox, setOpenLightbox }}>
      <ResultContext.Provider value={{ result, setResult }}>
        <Lightbox>
          <div id="page" className="App">
            <NavBar />
            <Content />
          </div>
        </Lightbox>
      </ResultContext.Provider>
    </LightboxContext.Provider>
  );
}

export default App;
