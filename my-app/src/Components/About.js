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
      <h4 ref={ref}>What is Phishing?</h4>
      <p>
        As defined by phishing.org, "Phishing is a cybercrime in which a target
        or targets are contacted by email, telephone or text message by someone
        posing as a legitimate institution to lure individuals into providing
        sensitive data such as personally identifiable information, banking and
        credit card details, and passwords."
      </p>
      <br />
      <br />
      <br />
      <h4 ref={ref}>Our Motivation</h4>
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
