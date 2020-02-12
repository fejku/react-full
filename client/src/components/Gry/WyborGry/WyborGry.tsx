import React from 'react'

import Gra from "./Gra/Gra";
import KolkoIKrzyzyk from "../KolkoIKrzyzyk/KolkoIKrzyzyk";

import { ReactComponent as TicTacToeImage } from "../../../assets/Gry/tic-tac-toe.svg";

import "./WyborGry.css";

const WyborGry = () => {

  const listaGier = [
    {
      nazwa: "Kółko i krzyżyk",
      sciezka: "kolko_i_krzyzyk",
      obrazek: <TicTacToeImage />,
      komponent: <KolkoIKrzyzyk />,
    },
    { nazwa: "Dooble", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
    { nazwa: "Memories", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
    { nazwa: "Onitama", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
    { nazwa: "Ghost Stories", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
    { nazwa: "Refleks", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
    { nazwa: "Color Game", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
    { nazwa: "Brain fittness", sciezka: "kolko_i_krzyzyk", obrazek: <TicTacToeImage />, komponent: <KolkoIKrzyzyk /> },
  ];

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
