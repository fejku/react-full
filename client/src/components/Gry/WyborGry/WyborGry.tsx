import React from 'react'

import { IGra } from "../Gry";
import Gra from "./Gra/Gra";

import "./WyborGry.css";

interface WyborGryProps {
  listaGier: IGra[];
}

const WyborGry: React.FC<WyborGryProps> = ({ listaGier }) => {

  return (
    <div className="WyborGry">
      <h1>Gry</h1>
      <div className="WyborGry_container">
        {listaGier.map(gra => <Gra key={gra.nazwa} gra={gra}/>)}
      </div>
    </div>
  )
}

export default WyborGry
