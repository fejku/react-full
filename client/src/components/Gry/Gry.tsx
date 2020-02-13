import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import NazwaGracza from "./NazwaGracza/NazwaGracza";
import WyborGry from "./WyborGry/WyborGry";
import KolkoIKrzyzyk from "./KolkoIKrzyzyk/KolkoIKrzyzyk";
import Onitama from "./Onitama/Onitama";

import { ReactComponent as TicTacToeImage } from "../../assets/Gry/tic-tac-toe.svg";

import "./Gry.css";
import Nazwa from "./Nazwa/Nazwa";
import Poczekalnia from "./Poczekalnia/Poczekalnia";

export interface IGra {
  nazwa: string;
  sciezka: string;
  obrazek: JSX.Element;
  komponent: JSX.Element;
}

const Gry = () => {
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

  const { url } = useRouteMatch();

  // const ENDPOINT = "http://localhost:3001/users";

  // const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  // useEffect(() => {
  //   let uuid = sessionStorage.getItem("uuid");
  //   if (uuid === null) {
  //     uuid = getUUIDv4();
  //     sessionStorage.setItem("uuid", uuid);
  //   }

  //   const socketIO = socketIOClient(ENDPOINT);

  //   socketIO.on(SocketEvent.CONNECT, () => {
  //     socketIO.emit(UzytkownikSocketEvent.INIT, uuid);
  //     setSocket(socketIO);
  //   });
  // }, []);

  return (
    <div className="Gry">
      <Switch>
        <Route exact path={`${url}`}>
          <WyborGry listaGier={listaGier} />
        </Route>
        <Route path={`${url}/nazwa`} component={Nazwa} />
        {listaGier.map(gra => (
          <NazwaGracza key={gra.nazwa} path={`${url}/${gra.sciezka}`}>
            <Poczekalnia gra={gra} />
            {/* {gra.komponent} */}
          </NazwaGracza>
        ))}
      </Switch>
    </div>
  );
};

export default Gry;
