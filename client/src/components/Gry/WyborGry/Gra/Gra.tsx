import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { IGra } from "../../../../model/IGra";

import classes from "./Gra.module.css";

export interface GraProps {
  gra: IGra;
}

const Gra: React.FC<GraProps> = ({
  gra: { nazwa, sciezka, obrazek, komponent },
}) => {
  let { url } = useRouteMatch();

  return (
    <div className={classes.gra}>
      <Link to={`${url}/${sciezka}`}>
        <div className={classes.nazwa}>
          <h3 className={classes.header}>{nazwa}</h3>
        </div>
        <div className={classes.obrazek}>{obrazek}</div>
      </Link>
    </div>
  );
};

export default Gra;
