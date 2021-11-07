import React from "react";
import {useDropzone} from 'react-dropzone';

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
        console.log(reader.result)
    }, false);

     if (file) {
        reader.readAsText(file);
    }
  }

  const readText = () => {
     const [file] = document.getElementsByClassName("dropzone").files;
       const reader = new FileReader();

    reader.addEventListener("load", () => {
        // this will then display a text file
        console.log(reader.result)
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