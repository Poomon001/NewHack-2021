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
        This app is an free and easy-to-used online tools allowing to evaluate a
        phishing email without having to install any software.
      </p>
      <br />
      <br />
      <div>1. Open your email</div>
      <br />
      <br />
      <img src="step1.jpg" alt="step1" className="step" />
      <br />
      <br />
      <div>2. Download your email as .eml file</div>
      <br />
      <br />
      <img src="step2.jpg" alt="step2" className="step" />
      <br />
      <br />
      <div>3. Drag-and-drop the file to the box</div>
      <br />
      <br />
      <img src="step3.jpg" alt="step3" className="step" />
      <br />
      <br />
      <div>4. Click open to see the result</div>
      <br />
      <br />
      <img src="step4.jpg" alt="step4" className="step" />

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
