import logo from './logo.svg';
import './App.css';
import Todo from "./Components/Todo";
import DragAndDrop from "./Components/DragAndDrop";
import Form from "./Components/Form";
import React, {useState} from "react"
import Display from "./Components/Display";

function App() {
    const [todo, setTodo] = useState([])
  return (
    <div className="App">
      <Todo todo={todo} setTodo={setTodo}/>
      <Form/>
      <DragAndDrop />
      <Display todo={todo}/>
    </div>
  );
}

export default App;
