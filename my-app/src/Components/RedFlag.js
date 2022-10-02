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
    <>
      <p>
        This infographic from KnowBe4 outlines major red flags to look for when
        reading an email, and we utilized many of these in our project.
      </p>
      <br />
      <SRLWrapper options={options}>
        <img
          src="social_engineering_reg_flags.jpg"
          alt="Social Engineer Red Elag"
          id="redFlag"
        ></img>
      </SRLWrapper>
    </>
  );
}

export default redFlag;
