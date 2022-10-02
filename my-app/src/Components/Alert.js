import React from "react";
import { useAlert } from "./util/useAlert";

function Alert() {
  const alert = useAlert();
  const setAlert = alert.setAlert;
  const handleClick = () => {
    setAlert(false);
  };
  setTimeout(handleClick, 5000);
  return (
    <div className="alert">
      <span className="closebtn" onClick={handleClick}>
        &times;
      </span>
      <strong>Wrong File</strong> Please upload a .eml file.
    </div>
  );
}

export default Alert;
