import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import { UzytkownikSocketContext } from "../App";
// import { UzytkownikSocketEvent } from "../model/SocketEvent";

import classes from "./Nazwa.module.css";

const Nazwa: React.FC = () => {
  // const socket = useContext(UzytkownikSocketContext);
  const history = useHistory();
  const location = useLocation();
  const [nazwa, setNazwa] = useState("");

  const { from } = location.state || { from: { pathname: "/" } };

  const handleZmienNazwe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNazwa(e.target.value);
  };

  const handleUstawNazwe = () => {
    sessionStorage.setItem("nazwaGracza", nazwa);
    // if (socket) {
    //   socket.emit(UzytkownikSocketEvent.USTAW_NAZWE, nazwa);
    // }
    history.replace(from);
  };

  return (
    <div className={classes.nazwa}>
      <h1 className={classes.header}>Podaj nazwę gracza</h1>
      <div className={classes.input_container}>
        <input
          className={classes.input}
          type="text"
          value={nazwa}
          onChange={handleZmienNazwe}
        />
        <button className={classes.btn_zapisz} onClick={handleUstawNazwe}>
          Zapisz
        </button>
      </div>
    </div>
  );
};

export default Nazwa;
