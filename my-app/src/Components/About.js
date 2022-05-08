import React, { useRef, useEffect } from "react";
import RedFlag from "./RedFlag";
import AboutDetails from "./AboutDetails";
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
        Our project is to provide peace of mind to the community by allowing
        them to protect their privacy by checking suspicious email using our web
        application. We consider Social Engineering Red Flags to implement this
        phishing email evaluator.
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
      {/* <AboutDetails /> */}
    </section>
  );
};

export default About;
