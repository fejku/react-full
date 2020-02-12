import React, { useEffect, useState } from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "./Gry.css";
import KolkoIKrzyzyk from "./KolkoIKrzyzyk/KolkoIKrzyzyk";
import { ReactComponent as TicTacToeImage } from "../../assets/Gry/tic-tac-toe.svg";
import Home from "../Home/Home";

const Gry = () => {
  const ENDPOINT = "http://localhost:3001/users";

  const gry = [
    {
      nazwa: "Kółko i krzyżyk",
      obrazek: <TicTacToeImage />,
      komponent: KolkoIKrzyzyk,
    },
    { nazwa: "Dooble", obrazek: null, komponent: null },
    { nazwa: "Memories", obrazek: null, komponent: null },
    { nazwa: "Onitama", obrazek: null, komponent: null },
    { nazwa: "GhostStories", obrazek: null, komponent: null },
  ];

  let { path, url } = useRouteMatch();
  let { id } = useParams();

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
  console.log(path, url, id);

  const gryLista = gry.map(gra => (
    <div key={gra.nazwa} className="gra_container">
      <Link to={`${url}/kolko_i_krzyzyk`}>
        <div className="gra_nazwa">
          <h3>{gra.nazwa}</h3>
        </div>
        <div className="gra_obrazek">{gra.obrazek}</div>
      </Link>
    </div>
  ));

  return (
    <div className="gry">
      {/* <h1>Gry</h1> */}

      <Switch>
        <Route exact path={`${url}`}>
          {gryLista}
        </Route>
        <Route path={`${url}/:id`} component={KolkoIKrzyzyk} />
      </Switch>
    </div>
  );
};

export default Gry;
