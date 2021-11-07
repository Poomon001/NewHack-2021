import React, {Suspense, useEffect, useState} from "react";
import FsLightbox from 'fslightbox-react';


const Todo = (props) => {
    const {todo, setTodo} = props
    
    useEffect(() => {
            console.log("hello")
        const fetchMyAPI = async () => {

            console.log("bye")
            let response = await fetch('/myAPI');
            response = await response.json();
            console.log(response)
            
            setTodo({
                "sender": response["sender"],
                "subject": response["subject"],
                "cc": response["cc"],
                "date": response["date"],
                "body": response["body"],
                "attachments": response["attachments"],
                "total": response["total"]
            })

            console.log(response)
        }
        fetchMyAPI()
    }, [])

    return (<></>);

}


export default Todo