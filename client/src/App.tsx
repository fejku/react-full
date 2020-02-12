import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Gry from "./components/Gry/Gry";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gry" component={Gry} />
          {/* <Route exact path="/nazwa" component={Nazwa} />
          <NazwaRoute exact path="/kik">
            <KolkoIKrzyzyk />
          </NazwaRoute> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
