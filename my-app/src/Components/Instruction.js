import React, { useRef, useEffect } from "react";
function Instruction(props) {
  const { setInstructionRef } = props;
  const ref = useRef(null);
  useEffect(() => {
    setInstructionRef(ref);
  });
  return (
    <section className="Instruction">
      <div className="wave2" />
      <h4 ref={ref}>INSTRUCTION</h4>
      <p>
        Our plan is to provide peace of mind to the community by allowing them
        to protect their privacy by checking suspicious activities using our web
        application.{" "}
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
