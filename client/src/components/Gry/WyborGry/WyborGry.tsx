import React from "react";

import { IGra } from "../../../model/IGra";
import Gra from "./Gra/Gra";

import classes from "./WyborGry.module.css";

interface WyborGryProps {
  listaGier: IGra[];
}

const WyborGry: React.FC<WyborGryProps> = ({ listaGier }) => {
  return (
    <div className={classes.wybor_gry}>
      <h1 className={classes.header}>Gry</h1>
      <div className={classes.container}>
        {listaGier.map(gra => (
          <Gra key={gra.nazwa} gra={gra} />
        ))}
      </div>
    </div>
  );
};

export default WyborGry;
