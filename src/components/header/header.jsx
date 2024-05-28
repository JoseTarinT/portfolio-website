import { useNavigate } from "react-router-dom";
import Contact from "../button/contactButton";
import "./index.css";
import "../../index.css";

const menuItems = ["All", "About", "Projects", "Contact"];

const Header = () => {
  let navigate = useNavigate();

  const renderMenuItems = (items) => {
    // eslint-disable-next-line react/jsx-key
    return items.map((i) => (
      <button
        key={i}
        onClick={() => navigate(i === "All" ? "/" : `/${i.toLowerCase()}`)}
      >
        {i}
      </button>
    ));
  };

  return (
    <div className="menu">
      <div className="menu-options">{renderMenuItems(menuItems)}</div>
      <Contact />
    </div>
  );
};

export default Header;
