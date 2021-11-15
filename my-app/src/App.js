import "./App.css";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
