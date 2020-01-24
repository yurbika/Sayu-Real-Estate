import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//das sind die import damit die dropdowns von überall geschlossen werden können
import { handleClickOutside } from "./redux/dropdown/dropdown.utils";
import toggleDropdown from "./redux/dropdown/dropdown.action";
import DropdownActionTypes from "./redux/dropdown/dropdown.types";

//import component
import Header from "./components/header/header.component";
import Startseite from "./pages/startseite/startseite.component";

//import styles
import "./App.css";

//onClick wird gebraucht wegen den dropdowns

const App = ({ toggleDropdown }) => {
  return (
    <div
      onClick={e =>
        handleClickOutside(e)
          ? toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE)
          : null
      }
    >
      <Header />
      <Switch>
        <Route exact path="/" component={Startseite} />
      </Switch>
    </div>
  );
};

//Redux

const mapDispatchToProps = dispatch => ({
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle))
});

export default connect(null, mapDispatchToProps)(App);
