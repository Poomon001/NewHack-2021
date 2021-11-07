import logo from './logo.svg';
import './App.css';
import Todo from "./Pages/Todo";
import DragAndDrop from "./Components/DragAndDrop";

function App() {
  return (
    <div className="App">
      <Todo/>
      <DragAndDrop></DragAndDrop>
    </div>
  );
}

export default App;
