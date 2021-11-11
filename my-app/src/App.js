import "./App.css";
import DragAndDrop from "./Components/DragAndDrop";
import React, { useState, useEffect } from "react";
import Display from "./Components/Display";
import FsLightbox from "fslightbox-react";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <DragAndDrop />
      <Display todo={todo} />
    </div>
  );
}

export default App;
