import './App.css';
import Todo from "./Components/Todo";
import DragAndDrop from "./Components/DragAndDrop";
import Form from "./Components/Form";
import React, {useState} from "react"
import Display from "./Components/Display";

function App() {
    const [todo, setTodo] = useState([])
    console.log(todo)
    return (
        <>
            <div className="nav-links">
                <nav>
                    <a className="logo"><img src="new-logo.png" alt=""/></a>
                    <ul>
                        <li className="Pages"><a href="">HOME</a></li>
                        <li className="Pages"><a href="">ABOUT</a></li>
                    </ul>
                </nav>
            </div>

            <section className="About">
                {/* <h4>ABOUT</h4> */}
                <p>Our plan is to provide peace of mind to the community by giving users a way to check the likelihood of an email
                    containing malicious intentions, specifically for phishing. </p>
            </section>

            <div className="App">
                <Todo todo={todo} setTodo={setTodo}/>
                <Form/>
                <Display todo={todo}/>
                <DragAndDrop/>
            </div>
        </>
    );
}

export default App;
