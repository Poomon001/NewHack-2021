import React, {useState} from "react";
import {useDropzone} from 'react-dropzone';
import Form from "./Form";

const fileTypes = ["TXT"];

const DragAndDrop = () => {
  const {acceptedFiles, displayContents, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const previewFile = () => {
       const [file] = document.querySelector('input[type=file]').files;
       const reader = new FileReader();

    reader.addEventListener("load", () => {
        // this will then display a text file
        const data = { name: reader.result};
        console.log('submit');
        fetch('/myAPI', {
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify({content: data}),
            })
        }, false);

     if (file) {
        reader.readAsText(file);
    }
  }

  return (
      <section className="container">
          <div {...getRootProps({className: 'dropzone'})} >
              <input type="file" {...getInputProps()} onChange={previewFile}/>
              <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
          </aside>
    </section>
  );
}

export default DragAndDrop