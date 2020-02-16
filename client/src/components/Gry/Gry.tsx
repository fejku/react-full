import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import socketIOClient from "socket.io-client";

import { SocketEvent, UzytkownikSocketEvent } from "../../const/SocketEvent";

import listaGier from "../../const/ListaGier";

import Nazwa from "./Nazwa/Nazwa";
import Poczekalnia from "./Poczekalnia/Poczekalnia";
import NazwaGracza from "./NazwaGracza/NazwaGracza";
import WyborGry from "./WyborGry/WyborGry";

import "./Gry.css";

const Gry = () => {
  const { url } = useRouteMatch();

  const ENDPOINT = "http://localhost:3001/users";

  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    let uuid = sessionStorage.getItem("uuid");
    if (uuid === null) {
      uuid = uuidv4();
      sessionStorage.setItem("uuid", uuid);
    }

    const socketIO = socketIOClient(ENDPOINT);

    socketIO.on(SocketEvent.CONNECT, () => {
      socketIO.emit(UzytkownikSocketEvent.INIT, uuid);
      setSocket(socketIO);
    });
  }, []);

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
          </NazwaGracza>
        ))}
      </Switch>
    </div>
  );
};

export default Gry;
