import React from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { ReactComponent as GamePadIcon2 } from "../../assets/Menu/GamePadIcon.svg";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu_item">
        <Link to="/">
          <FaHome />
        </Link>
      </div>
      <div className="menu_item">
        <Link to="/gry">
          <GamePadIcon2 />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
