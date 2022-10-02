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
    <div class="alert">
      <span class="closebtn" onClick={handleClick}>
        &times;
      </span>
      <strong>Danger!</strong> Indicates a dangerous or potentially negative
      action.
    </div>
  );
}

export default Alert;
