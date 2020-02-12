import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./KolkoIKrzyzyk.css";

const KolkoIKrzyzyk = () => {
  const endpoint = "http://localhost:3001/users";

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

  return <div className="KolkoIKrzyzyk">
    <svg style={{background: "red"}}></svg>
  </div>;
};

export default KolkoIKrzyzyk;
