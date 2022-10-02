import React, { useRef, useEffect } from "react";
import RedFlag from "./RedFlag";
const About = (props) => {
  const { setAboutRef } = props;
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
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
      <p>
        Our motivation for this project was to help people recognize the common
        signs of a phishing email to potentially minimize damages such as
        identity theft and financial loss. In doing so, we developed an
        automated tool that safely parses an email and reports its risk of being
        a phishing email.
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
