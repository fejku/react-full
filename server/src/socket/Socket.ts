import { Server } from "socket.io";
import { UzytkownikSocket } from "./UzytkownikSocket";

class Socket {
  constructor(public io: Server) {}

  public dodajNamespace() {
    const uzytkownikSocket = new UzytkownikSocket(this.io);
    uzytkownikSocket.dodajNamespace();
  }
}

export default Socket;
