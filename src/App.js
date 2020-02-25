import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//das sind die import damit die dropdowns von überall geschlossen werden können
import { handleClickOutside } from "./utils/utils";
import toggleDropdown from "./redux/dropdown/dropdown.action";
import DropdownActionTypes from "./redux/dropdown/dropdown.types";

//import component
import Startseite from "./pages/startseite/startseite.component";
import Liste from "./pages/Liste/Liste.component";

//import styles
import "./App.css";

//onMouseDown wird gebraucht um die dropdowns von überall schließen zu können

const App = ({ toggleDropdown }) => {
  return (
    <div
      onMouseDown={e =>
        handleClickOutside(e)
          ? toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE)
          : null
      }
    >
      <Switch>
        <Route exact path="/" component={Startseite} />
        <Route exact path="/liste" component={Liste} />
      </Switch>
    </div>
  );
};

//Redux

const mapDispatchToProps = dispatch => ({
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle))
});

export default connect(null, mapDispatchToProps)(App);
