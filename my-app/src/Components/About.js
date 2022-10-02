import React, { useRef, useEffect } from "react";
import RedFlag from "./RedFlag";
const About = (props) => {
  const { setAboutRef } = props;
  const ref = useRef(null);
  useEffect(() => {
    setAboutRef(ref);
  });
  return (
    <section className="About">
      <div className="wave1" />
      <h4 ref={ref}>ABOUT</h4>
      <p>
        A web application that analyzes a .eml file (email) and assigns a
        percentage score along with a breakdown of the score corresponding to
        the risk of the email being used for phishing or other nefarious
        purposes.
      </p>
      <br />
      <br />
      <br />
      <RedFlag />
      <br />
      <br />
      <div style={{ fontWeight: "bold" }}>Click Image to Open</div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default About;
