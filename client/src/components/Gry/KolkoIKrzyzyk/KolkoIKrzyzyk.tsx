import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

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

  return <div>kk</div>;
};

export default KolkoIKrzyzyk;
