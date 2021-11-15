import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Request from "../Apis/Request";
import Display from "./Display";

const DragAndDrop = () => {
  const { getRootProps, getInputProps } = useDropzone();
  const [result, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOnChange = () => {
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        let text = reader.result;

        // send a post text to Flask api and take a response from the api
        Request(text)
          .then((res) => {
            // set the returned result from api
            setResult(res);
            // set to open a graph
            setOpen(true);
          })
          .catch((err) => console.log("error on DragAndDrop:", err));
      },
      false
    );

    if (file) {
      reader.readAsText(file);
      var x = document.getElementById("popUp");
      x.style.display = "block";
      x.dataset.label = file.name;
    }
  };

  return (
    <>
      {/* render graphs */}
      {open && <Display todo={result} />}

      {/* upload form */}
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input
            type="file"
            {...getInputProps()}
            onChange={handleOnChange}
            accept=".eml"
          />
          <span className="Name">
            Click to upload file
            <img src="file.png" />
          </span>
          <div id="popUp" style={{ display: "none" }}>
            <img src="file.png" style={{ radiant: "red" }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DragAndDrop;
