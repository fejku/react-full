import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./KolkoIKrzyzyk.css";

const KolkoIKrzyzyk = () => {
  const plansza = <svg viewBox="0 0 300 300">
  <g stroke="#000" strokeWidth="2">
    <path d="m100 0v300" fill="none" />
    <path d="m200 0v300" fill="none" />
    <path d="m0 100h300" fill="none" />
    <path d="m0 200h300" fill="none" />
  </g>
</svg>;

const cross =     <svg viewBox="0 0 100 100">
  <line x1="0" y1="0" x2="100" y2="100" stroke="#000" />
  <line x1="0" y1="100" x2="100" y2="0" stroke="#000" />
</svg>;

const circle = <svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="49" stroke="#000" fill="none" />
</svg>;

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
    {plansza}
  </div>;
};

export default KolkoIKrzyzyk;
