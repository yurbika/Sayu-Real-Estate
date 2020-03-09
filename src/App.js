import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//das sind die import damit die dropdowns von überall geschlossen werden können
import {
  handleClickOutsideDropdown,
  handleClickOutsidePopup
} from "./utils/utils";
import toggleDropdown from "./redux/dropdown/dropdown.action";
import DropdownActionTypes from "./redux/dropdown/dropdown.types";

import { togglePopup } from "./redux/popup/popup.action";

//import component
import Startseite from "./pages/startseite/startseite.component";
import Immobilien from "./pages/immobilien/immobilien.component";

//import styles
import "./App.css";

//onMouseDown wird gebraucht um die dropdowns von überall schließen zu können

const App = ({ toggleDropdown, togglePopup }) => {
  return (
    <div
      onMouseDown={e => {
        if (handleClickOutsideDropdown(e))
          toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE);
        if (handleClickOutsidePopup(e)) {
          togglePopup();
          document.body.style.overflowY = "visible";
        }
      }}
    >
      <Switch>
        <Route exact path="/" component={Startseite} />
        <Route exact path="/immobilien" component={Immobilien} />
      </Switch>
    </div>
  );
};

//Redux

const mapDispatchToProps = dispatch => ({
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  togglePopup: () => dispatch(togglePopup())
});

export default connect(null, mapDispatchToProps)(App);
