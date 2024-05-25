import Contact from "../button/contactButton";
import "./index.css";
import "../../index.css";

const menuItems = ["All", "About", "Projects"];

const Menu = () => {
  const renderMenuItems = (items) => {
    // eslint-disable-next-line react/jsx-key
    return items.map((i) => <span>{i} </span>);
  };
  return (
    <div className="menu">
      <div className="menu-options">{renderMenuItems(menuItems)}</div>
      <Contact />
    </div>
  );
};

export default Menu;
