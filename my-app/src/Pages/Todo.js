import React, {useState, useEffect} from "react";
import Hello from "../Components/Hello"
import Form from "../Components/Form";

const Todo = () => {
    const [todo, setTodo] = useState("")
    useEffect(() => {
        const fetchMyAPI = async () => {
          let response = await fetch('/myAPI');
          response = await response.json();
          console.log(response.name);
          setTodo(response.name)
        }
        fetchMyAPI()
    }, [])

    return (<><Hello todo={todo} />
    <Form/></>)

}


export default Todo