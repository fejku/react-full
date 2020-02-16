import React from "react";

import classes from "./Poczekalnia.module.css";
import { IGra } from "../../../model/IGra";

interface PoczekalniaProps {
  gra: IGra;
}

const Poczekalnia: React.FC<PoczekalniaProps> = ({ gra }) => {
  const handleNowaGra = () => {};

  return (
    <div className={classes.poczekalnia}>
      <h1 className={classes.header}>{gra.nazwa}</h1>
      <div className={classes.container}>
        <button className={classes.nowa_gra}>New game</button>
        <table className={classes.table}>
          <thead>
            <tr>
              <td>Nazwa gry</td>
              <td>Gracz 1</td>
              <td>Gracz 2</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aa</td>
              <td>a2a</td>
              <td>a2a</td>
              <td>
                <a>Dołącz</a>
              </td>
            </tr>
            <tr>
              <td>aa</td>
              <td>a2a</td>
              <td>a2a</td>
              <td>
                <a>Dołącz</a>
              </td>
            </tr>
            <tr>
              <td>aa</td>
              <td>a2a</td>
              <td>a2a</td>
              <td>
                <button>Dołącz</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Poczekalnia;
