import About from "./About";
import Instruction from "./Instruction";
import Upload from "./Upload";

const Content = ({ setAboutRef, setInstructionRef }) => {
  return (
    <section className="container">
      <h1 className="title">
        <span className="prefix">Phishing </span>
        <span className="suffix">Evaluator</span>
      </h1>
      <Upload />
      <About setAboutRef={setAboutRef} />
      <Instruction setInstructionRef={setInstructionRef} />
    </section>
  );
};

export default Content;
