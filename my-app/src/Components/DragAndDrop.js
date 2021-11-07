import React, {useState} from "react";
import {useDropzone} from 'react-dropzone';
import Form from "./Form";


const DragAndDrop = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const [text, setText] = useState("")
    const [toggler, setToggler] = useState(false);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const previewFile = () => {
        const [file] = document.querySelector('input[type=file]').files;
        const reader = new FileReader();
        const fs = require('fs')

        reader.addEventListener("load", () => {
            // this will then display a text file
            setText(reader.result)
        }, false);

        if (file) {
            reader.readAsText(file);
            var x = document.getElementById("popUp");
            x.style.display = "block"
            x.dataset.label = file.name;
        }
    }

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})} >
                <input type="file" {...getInputProps()} onChange={previewFile} accept=".eml"/>
                {/*<p className="Name">Click to upload file</p>*/}
                <span className="Name">Click to upload file<img src="file.png"/></span>
                <div id="popUp" style={{display: "none"}}><img src="file.png" style={{radiant: "red"}}/></div>
            </div>
            <Form text={text}/>
            <button className="Name" onClick={() => setToggler(!toggler)}>
                Toggle Lightbox
            </button>
        </section>);
}

export default DragAndDrop