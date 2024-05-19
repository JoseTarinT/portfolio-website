import Contact from "./contactButton";
import "../index.css";

const menuItems = ["All", "About", "Projects"];

const Menu = () => {
  const renderMenuItems = (items) => {
    // eslint-disable-next-line react/jsx-key
    return items.map((i) => <span>{i} </span>);
  };
  return (
    <div className="Menu">
      <h1>{renderMenuItems(menuItems)}</h1>
      <Contact />
    </div>
  );
};

export default Menu;
