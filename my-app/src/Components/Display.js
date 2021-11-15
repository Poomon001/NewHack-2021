import React from "react";
import Factors from "./Factors";
import Total from "./Total";

const Display = (props) => {
  const graphStyle1 = {
    height: "20em",
    width: "22em",
    float: "left",
  };

  const graphStyle2 = {
    height: "20em",
    width: "21em",
    marginLeft: "30%",
    marginTop: "1.3%",
    float: "right",
  };

  const wrapper = {
    width: "80%",
    margin: "auto",
  };

  return (
    <>
      <div style={wrapper}>
        <div style={graphStyle1} id="left">
          <Factors todo={props.todo} />
        </div>
        <div style={graphStyle2} id="right">
          <Total todo={props.todo} />
        </div>
      </div>
    </>
  );
};

export default Display;
