import "./index.css";
import Contact from "../button/contactButton";

export const Intro = () => {
  return (
    <>
      <div className="intro">
        <h4>Hello! My name is</h4>
        <h1>Jose Tarin</h1>
        <p>
          I'm a fullstack developer. My motivations is to deliver business value
          and level up my skils as a developer. Experience working with
          JavaScript, TypeScript, NodeJS, React. Let's get in touch.
        </p>
        <Contact />
      </div>
    </>
  );
};
