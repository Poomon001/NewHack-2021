import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Request from "../Apis/Request";

const DragAndDrop = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [text, setText] = useState("");

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleOnChange = () => {
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        setText(reader.result);
        Request(reader.result);
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
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input
          type="file"
          {...getInputProps()}
          onChange={handleOnChange}
          accept=".eml"
        />
        {/*<p className="Name">Click to upload file</p>*/}
        <span className="Name">
          Click to upload file
          <img src="file.png" />
        </span>
        <div id="popUp" style={{ display: "none" }}>
          <img src="file.png" style={{ radiant: "red" }} />
        </div>
      </div>

      <div className="nav-links">
        <nav>
          <a className="logo">
            <img src="new-logo.png" alt="" />
          </a>
          <ul>
            <li className="Pages">
              <a href="">HOME</a>
            </li>
            <li className="Pages">
              <a href="">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="About">
        <h4>ABOUT</h4>
        <p>
          Our plan is to provide peace of mind to the community by allowing them
          to protect their privacy by checking suspicious activities using our
          web application.{" "}
        </p>
      </section>

      <aside>
        <h1 className="Header">Check Spam</h1>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default DragAndDrop;
