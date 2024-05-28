import "./index.css";
import Contact from "../button/contactButton";

export const Intro = () => {
  return (
    <>
      <div className="intro">
        <h4>Hello! My name is</h4>
        <h1>Jose Tarin</h1>
        <p>
          I&apos;m a fullstack developer at ServiceNSW specialised in
          JavaScript/Typescript, React and NodeJS. I craft clean and
          efficient code to build digital products and motivated on leveling up
          my skils as a developer. Let&apos;s get in touch.
        </p>
        <Contact />
      </div>
    </>
  );
};
