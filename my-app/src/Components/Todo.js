import React, {useEffect, useState} from "react";
import FsLightbox from 'fslightbox-react';

const Todo = (props) => {
    const {todo, setTodo} = props

    useEffect(() => {
        const fetchMyAPI = async () => {
            let response = await fetch('/myAPI');
            response = await response.json();
            
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