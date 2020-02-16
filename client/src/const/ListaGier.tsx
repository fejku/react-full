import React from "react";
import { IGra } from "../model/IGra";

import KolkoIKrzyzyk from "../components/Gry/KolkoIKrzyzyk/KolkoIKrzyzyk";
import Onitama from "../components/Gry/Onitama/Onitama";

import { ReactComponent as TicTacToeImage } from "../assets/Gry/tic-tac-toe.svg";

const listaGier: IGra[] = [
  {
    nazwa: "Kółko i krzyżyk",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
  {
    nazwa: "Dooble",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
  {
    nazwa: "Memories",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
  {
    nazwa: "Onitama",
    sciezka: "onitama",
    obrazek: <TicTacToeImage />,
    komponent: <Onitama />,
  },
  {
    nazwa: "Ghost Stories",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
  {
    nazwa: "Refleks",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
  {
    nazwa: "Color Game",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
  {
    nazwa: "Brain fittness",
    sciezka: "kolko_i_krzyzyk",
    obrazek: <TicTacToeImage />,
    komponent: <KolkoIKrzyzyk />,
  },
];

export default listaGier;
