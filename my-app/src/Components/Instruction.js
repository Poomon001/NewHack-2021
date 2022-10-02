import React, { useRef, useEffect } from "react";
import { useWindowSize } from "./util/useWindowSize";
import DisplayInstructionMobile from "./DisplayInstructionMobile";
import DisplayInstructionPC from "./DisplayInstructionPC";

function Instruction(props) {
  const { setInstructionRef } = props;
  const ref = useRef(null);
  const [width] = useWindowSize();
  useEffect(() => {
    setInstructionRef(ref);
  });
  return (
    <section className="Instruction">
      <div className="wave2" />
      <h4 ref={ref}>INSTRUCTION</h4>
      <p>
        This app is an free and easy-to-used online tools allowing to evaluate a
        phishing email without having to install any software.
      </p>
      <br />
      <br />
      {width > 980 ? <DisplayInstructionPC /> : <DisplayInstructionMobile />}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default Instruction;
