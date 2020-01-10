import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import Startseite from "./pages/startseite/startseite.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Startseite} />
      </Switch>
    </div>
  );
};

export default App;
