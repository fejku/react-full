import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

import { IGra } from "../../Gry";

import "./Gra.css";

export interface GraProps {
  gra: IGra;
}

const Gra: React.FC<GraProps> = ({ gra: { nazwa, sciezka, obrazek, komponent} }) => {

  let { url } = useRouteMatch();

  return (
    <div className="Gra">
      <Link to={`${url}/${sciezka}`}>
        <div className="gra_nazwa">
          <h3>{nazwa}</h3>
        </div>
        <div className="gra_obrazek">{obrazek}</div>
      </Link>
    </div>
  )
}

export default Gra
