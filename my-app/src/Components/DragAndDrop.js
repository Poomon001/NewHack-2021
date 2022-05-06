import React, { useState, memo, useCallback } from "react";
// https://react-dropzone.js.org/
import { useDropzone } from "react-dropzone";
import Request from "../Apis/Request";
import { trackPromise } from "react-promise-tracker";
import Loader from "./Loader";
import { usePromiseTracker } from "react-promise-tracker";
import { useLightbox } from "./util/useLightbox";
import { useResult } from "./util/useResult";

const DragAndDrop = () => {
  const { promiseInProgress } = usePromiseTracker({
    area: "email-area",
    delay: 0,
  });

  const [open, setOpen] = useState(false);
  const result = useResult();
  const lightbox = useLightbox();
  const Button = lightbox.Button;

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
            setOpen(true);
          }),
          "email-area"
        ).catch((err) => console.log("error on DragAndDrop:", err));
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
                <img src="file.png" alt="file" />
              </span>
              <span style={{ display: "none" }}>
                {(document.getElementById("popUp").style.display = "none")}
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
          <div id="popUp" style={{ display: "none" }}>
            <img src="file.png" alt="file" style={{ radiant: "red" }} />
          </div>
        </div>
        {promiseInProgress ? <Loader area="email-area" /> : open && <Button />}
      </section>
    </>
  );
};

export default memo(DragAndDrop);
