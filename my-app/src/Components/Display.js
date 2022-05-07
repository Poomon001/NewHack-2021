import React, { useState } from "react";
import Factors from "./Factors";
import Total from "./Total";
import { useWindowSize } from "./util/useWindowSize";

const Display = () => {
  const [type1, setType1] = useState(1);
  const [type2, setType2] = useState(1);
  const [width, height] = useWindowSize();

  let graphStyle1 = {
    position: "relative",
    float: "left",
    top: type1 == 2 ? "11em" : "10em",
    width: type1 == 2 ? "35%" : "25%",
    margin: "0em 0em 0em 5em",
  };

  let graphStyle2 = {
    position: "relative",
    top: type2 == 2 ? "11em" : "10em",
    float: "right",
    width: type2 == 2 ? "35%" : "25%",
    margin: "0em 5em 0em 0em",
  };

  let wrapper = {
    minHeight: "calc(100% - 100px)",
    height: "auto",
    boxSizing: "border-box",
  };
  document.getElementById("lightboxButton").style.top = "85%";

  // mobile
  if (width < 915) {
    const diff = (915 - width) / 70;
    graphStyle1 = {
      top: type1 == 2 ? "16em" : "15em",
      width: type1 == 2 ? `calc(30% + ${diff}em)` : `calc(30% + ${diff}em)`,
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    graphStyle2 = {
      top: type2 == 2 ? "78%" : "75%",
      width: type2 == 2 ? `calc(30% + ${diff}em)` : `calc(30% + ${diff}em)`,
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    wrapper = {};

    document.getElementById("lightboxButton").style.top = "5%";
  }
  return (
    <>
      <div style={wrapper} id="wripper">
        <div style={graphStyle1} id="left">
          <Factors
            type={type1}
            setType={setType1}
            height={width < 892 ? "250%" : "200%"}
          />
        </div>
        <div style={graphStyle2} id="right">
          <Total
            type={type2}
            setType={setType2}
            height={width < 892 ? "250%" : "200%"}
          />
        </div>
      </div>
    </>
  );
};

export default Display;
