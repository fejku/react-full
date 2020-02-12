import { Namespace, Server, Socket } from "socket.io";
import { SocketEvent } from "../const/SocketEvent";

class KiKSocket {
  private static readonly NAMESPACE = "/users";

  private namespace: Namespace;

  constructor(io: Server) {
    this.namespace = io.of(KiKSocket.NAMESPACE);
    console.log("qwe");
    this.dodajNamespace();
  }

  public dodajNamespace() {
    this.namespace.on(SocketEvent.CONNECT, (socket: Socket) => {
      console.log(`Client ${socket.id} connected`);

      // socket.on(UzytkownikSocketEvent.INIT, (uuid: string) => {
      //   const uzytkownik = this.uzytkownicy.dajUzytkownikaUuid(uuid);
      //   const socketId = dajSocketId(socket.id);
      //   if (uzytkownik) {
      //     uzytkownik.socketId = socketId;
      //   } else {
      //     this.uzytkownicy.dodajUzytkownika(uuid, socketId);
      //   }
      // });

      socket.on("FromAPI", () => {
        console.log("asd");
      });

      socket.on(SocketEvent.DISCONNECT, () => {
        console.log(`Client ${socket.id} disconnected`);
      });
    });
  }
}

export default KiKSocket;
