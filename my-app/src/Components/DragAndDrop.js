import React, { useCallback, useEffect } from "react";
// https://react-dropzone.js.org/
import { useDropzone } from "react-dropzone";
import Request from "../Apis/Request";
import { trackPromise } from "react-promise-tracker";
import { useResult } from "./util/useResult";
import { useLightbox } from "./util/useLightbox";

const DragAndDrop = () => {
  const result = useResult();
  const lightbox = useLightbox();

  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles;
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        let text = reader.result;
        trackPromise(
          // send a post text to Flask api and take a response from the api
          Request(text).then((res) => {
            // set the returned result from api
            result.setResult(res);
            // set to open a graph
            lightbox.setShouldDisplay(true);
          }),
          "email-area"
        ).catch((err) => console.log("error on DragAndDrop:", err));
      },
      false
    );
    if (file) {
      console.log("hello");
      reader.readAsText(file);
      var x = document.getElementById("popUp");
      x.style.visibility = "visible";
      x.dataset.label = file.name;
    }
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {/* upload form */}
      <div {...getRootProps()}>
        <input {...getInputProps()} accept=".eml" />
        {isDragActive ? (
          <>
            <span className="Name">
              Drop file here...
              <img src="file.png" alt="file" />
            </span>
            <span>
              {(document.getElementById("popUp").style.visibility = "hidden")}
            </span>
            <span>
              {document.getElementById("lightboxButton") &&
                (document.getElementById("lightboxButton").style.visibility =
                  "hidden")}
            </span>
          </>
        ) : (
          <>
            <span className="Name">
              Click or drop file here
              <img src="file.png" alt="file" />
            </span>
          </>
        )}
        <div id="popUp">
          <img src="file.png" alt="file" style={{ radiant: "red" }} />
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
