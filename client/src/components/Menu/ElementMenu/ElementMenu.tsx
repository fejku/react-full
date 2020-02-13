import React from 'react'
import { Link } from "react-router-dom";

import classes from "./ElementMenu.module.css";

interface ElementMenuProps {
  element: {
    sciezka: string,
    komponent: JSX.Element,
  },
  aktywny: boolean,
  handler: (sciezka: string) => void,
}

const ElementMenu: React.FC<ElementMenuProps> = ({ element: {sciezka, komponent}, aktywny, handler }) => {

  const dajKlasy = () => {
    const result = [];
    result.push(classes.element_menu);
    if (aktywny) {
      result.push(classes.aktywny);
    }
    return result.join(" ");
  }

  const handleClick = () => {
    handler(sciezka)
  }

  return (
    <Link 
      className={dajKlasy()} 
      to={`${sciezka}`} 
      onClick={handleClick}
    >
      {komponent}
    </Link>
  )
}

export default ElementMenu
