import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function redFlag() {
  const options = {
    buttons: {
      showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
    },
  };
  return (
    <SRLWrapper options={options}>
      <img
        src="social_engineering_reg_flags.jpg"
        alt="Eocial Engineer Red Elag"
        id="redFlag"
      ></img>
    </SRLWrapper>
  );
}

export default redFlag;
