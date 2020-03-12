import React, { lazy, Suspense } from "react";
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
import Spinner from "./components/spinner/spinner.component";

//import styles
import "./App.css";

const Startseite = lazy(() =>
  import("./pages/startseite/startseite.component")
);
const Immobilien = lazy(() =>
  import("./pages/immobilien/immobilien.component")
);

//onMouseDown wird gebraucht um die dropdowns von überall schließen zu können
class App extends React.Component {
  render() {
    const { toggleDropdown, togglePopup } = this.props;
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
          <Suspense fallback={<Spinner page />}>
            <Route exact path="/" component={Startseite} />
            <Route exact path="/immobilien" component={Immobilien} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

//Redux

const mapDispatchToProps = dispatch => ({
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  togglePopup: () => dispatch(togglePopup())
});

export default connect(null, mapDispatchToProps)(App);
