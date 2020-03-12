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
import Spinner from "./components/spinner/spinner.component";

//onMouseDown wird gebraucht um die dropdowns von überall schließen zu können

class App extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ isLoading: false }));
  }
  render() {
    const { toggleDropdown, togglePopup } = this.props;
    const { isLoading } = this.state;

    if (isLoading) return <Spinner page />;
    else
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
  }
}
function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 2500));
}

//Redux

const mapDispatchToProps = dispatch => ({
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  togglePopup: () => dispatch(togglePopup())
});

export default connect(null, mapDispatchToProps)(App);
