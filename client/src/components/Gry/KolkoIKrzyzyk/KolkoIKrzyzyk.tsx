import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./KolkoIKrzyzyk.css";

const KolkoIKrzyzyk = () => {
  const plansza = (
    <svg viewBox="0 0 300 300" fill="red">
      <g stroke="#000" strokeWidth="1">
        <g className="plansza">
          <line className="liniaPozioma" x1="0" y1="100" x2="300" y2="100" />
          <line className="liniaPozioma" x1="0" y1="200" x2="300" y2="200" />
          <line className="liniaPionowa" x1="100" y1="0" x2="100" y2="300" />
          <line className="liniaPionowa" x1="200" y1="0" x2="200" y2="300" />
        </g>
        <g className="krzyzyk">
          <line x1="10" y1="10" x2="90" y2="90" strokeWidth="2" />
          <line x1="10" y1="90" x2="90" y2="10" strokeWidth="2" />
        </g>
        <g className="kolko">
          <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );

  const nazwaGracza = sessionStorage.getItem("nazwaGracza");

  // const endpoint = "http://localhost:3001/users";

  // useEffect(() => {
  //   const socket = socketIOClient(endpoint);

  //   socket.on("connect", () => {
  //     // socketIO.emit(UzytkownikSocketEvent.INIT, uuid);
  //     // setSocket(socketIO);
  //   });
  //   // socket.on("FromAPI", () => {
  //   //   console.log("aaa");
  //   // });
  // }, []);

  return <div className="KolkoIKrzyzyk">{plansza}</div>;
};

export default KolkoIKrzyzyk;
