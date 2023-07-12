import React, { useState } from "react";
import Factors from "./Factors";
import Total from "./Total";
import { useWindowSize } from "./util/useWindowSize";
import { useResult } from "./util/useResult";

const Display = () => {
  const [type1, setType1] = useState(1);
  const [type2, setType2] = useState(1);
  const [width, height] = useWindowSize();
  const result = useResult().result;
  const high = result.total;

  let graphStyle1 = {
    position: "relative",
    float: "left",
    top: type1 === 2 ? "8.5em" : "7em",
    width: type1 === 2 ? "35%" : "25%",
    margin:
      type1 === 2
        ? `0em 0em 0em calc(${width / 365}em)`
        : `0em 0em 0em calc(${width / 170}em)`,
    backgroundColor: "white",
    padding: "1em",
    border: "1px solid gray",
  };

  let graphStyle2 = {
    position: "relative",
    top: type2 === 2 ? "8.5em" : "7em",
    float: "right",
    width: type2 === 2 ? "35%" : "25%",
    margin:
      type2 === 2
        ? `0em calc(${width / 285}em) 0em 0em`
        : `0em calc(${width / 150}em) 0em 0em`,
    backgroundColor: "white",
    padding: "1em",
    border: "1px solid gray",
  };

  let wrapper = {
    minHeight: "calc(100% - 100px)",
    height: "auto",
    boxSizing: "border-box",
  };

  document.getElementById("lightboxButton").style.top = "85%";
  document.getElementById("posibility") &&
    (document.getElementById("posibility").style.display = "block");

  // mobile
  if (width < 915) {
    const diff = (915 - width) / 70;
    graphStyle1 = {
      top: type1 === 2 ? "16.3em" : "15em",
      width: type1 === 2 ? `calc(30% + ${diff}em)` : `calc(30% + ${diff}em)`,
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    graphStyle2 = {
      top: type2 === 2 ? "77.7%" : "75%",
      width: type2 === 2 ? `calc(30% + ${diff}em)` : `calc(30% + ${diff}em)`,
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    wrapper = {};

    document.getElementById("lightboxButton").style.top = "5%";
    document.getElementById("posibility") &&
      (document.getElementById("posibility").style.display = "none");
  }

  // mobile
  if (height > 800) {
    const diffH = (915 - width) / 70;
    graphStyle1 = {
      top: type1 === 2 ? "37.3%" : "35%",
      width: type1 === 2 ? `calc(30% + ${diffH}em)` : `calc(30% + ${diffH}em)`,
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    graphStyle2 = {
      top: type2 === 2 ? "72.7%" : "70.5%",
      width: type2 === 2 ? `calc(30% + ${diffH}em)` : `calc(30% + ${diffH}em)`,
      position: "fixed",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    wrapper = {};

    document.getElementById("lightboxButton").style.top = "90%";
    document.getElementById("posibility") &&
      (document.getElementById("posibility").style.display = "block");
  }
  return (
    <>
      <div style={wrapper} id="wripper">
        <h1 id="posibility">
          <span className="suffix">The Phishing Posibility:</span>{" "}
          <span className="prefix">{high}%</span>
        </h1>
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
