import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Gry from "./components/Gry/Gry";
import Test from "./components/Test";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Menu />
        <div className={classes.main_body}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gry" component={Gry} />
            <Route path="/test" component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
