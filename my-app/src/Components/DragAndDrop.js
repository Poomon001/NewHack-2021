import React, { useState, useContext, useCallback } from "react";
// https://react-dropzone.js.org/
import { useDropzone } from "react-dropzone";
import Request from "../Apis/Request";
import LightBoxButton from "./LightboxButton";
import { ResultContext } from "../App";

const DragAndDrop = () => {
  const [open, setOpen] = useState(false);
  const { setResult } = useContext(ResultContext);

  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles;
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
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {/* upload form */}
      <section className="topContent">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <span className="Name">
                Drop file here...
                <img src="file.png" />
              </span>
              <span style={{ display: "none" }}>
                {(document.getElementById("popUp").style.display = "none")}
              </span>
            </>
          ) : (
            <>
              <span className="Name">
                Click or drop file here
                <img src="file.png" />
              </span>
            </>
          )}
          <div id="popUp" style={{ display: "none" }}>
            <img src="file.png" style={{ radiant: "red" }} />
          </div>
        </div>
        {open && <LightBoxButton />}
      </section>
    </>
  );
};

export default DragAndDrop;
