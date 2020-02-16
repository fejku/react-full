import cors from "cors";
import express from "express";
import { createServer } from "http";
import socketIo from "socket.io";

import Socket from "./socket/Socket";

const port = process.env.PORT || 3001;
const app = express();
const server = createServer(app);
const io = socketIo(server);

app.use(cors());

server.listen(port, () => {
  console.log("Running server on port %s", port);

  const socket = new Socket(io);
  socket.dodajNamespace();
});
