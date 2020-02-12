import cors from "cors";
import express from "express";
import { createServer } from "http";
import socketIo from "socket.io";

import KiKSocket from "./kik/kik-socket";

const port = process.env.PORT || 3001;
const app = express();
const server = createServer(app);
const io = socketIo(server);

app.use(cors());

server.listen(port, () => {
  console.log("Running server on port %s", port);

  const kikSocket = new KiKSocket(io);
});

// const uzytkownikSocket = new UzytkownikSocket(this.io);
// uzytkownikSocket.dodajNamespace();

// const kikSocket = new KiKSocket(this.io, uzytkownikSocket.uzytkownicy);
// kikSocket.addNamespace();
