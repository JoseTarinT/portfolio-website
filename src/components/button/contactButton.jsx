import "./index.css";

const Contact = () => {
  const handleClick = () => {
    console.log("My contact number is: ...");
  };

  return (
    <button className="contact" onClick={handleClick}>
      Contact
    </button>
  );
};

export default Contact;
