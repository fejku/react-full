import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { ReactComponent as GamePadIcon2 } from "../../assets/Menu/GamePadIcon.svg";
import { ReactComponent as Logo} from "../../assets/Menu/logo.svg";

import classes from "./Menu.module.css";
import ElementMenu from "./ElementMenu/ElementMenu";

const Menu: React.FC = () => {

  const [aktywny, setAktywny] = useState("/");
  
  const listaMenu = [
    {sciezka: "/", komponent: <FaHome />},
    {sciezka: "/gry", komponent: <GamePadIcon2 />},
  ];

  const handleLinkClick = (sciezka: string) => {
    setAktywny(sciezka);
  }

  return (
    <nav className={classes.menu}>
      <Link 
        className={classes.logo} 
        to="/" 
        onClick={() => {handleLinkClick("/")}}
      >
        <Logo />
      </Link>
      <div className={classes.lista}>
        {listaMenu.map(elementMenu => (
          <ElementMenu 
            key={elementMenu.sciezka} 
            element={elementMenu} 
            aktywny={aktywny === elementMenu.sciezka} 
            handler={handleLinkClick}
          />
        ))}
      </div>
    </nav>
  );
};

export default Menu;
