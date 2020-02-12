import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./Gry.css";
import WyborGry from "./WyborGry/WyborGry";

const Gry = () => {

  let { url } = useRouteMatch();

  // const ENDPOINT = "http://localhost:3001/users";

  // let { id } = useParams();

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

  return (
    <div className="Gry">
      <Switch>
        <Route exact path={`${url}`}>
          <WyborGry />
        </Route>
        {/* <Route path={`${url}/:id`} component={KolkoIKrzyzyk} /> */}
      </Switch>
    </div>
  );
};

export default Gry;
