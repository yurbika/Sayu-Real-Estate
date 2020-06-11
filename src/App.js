import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//import component
import Spinner from "./components/spinner/spinner.component";
import ErrorPage from "./pages/error/error.component";

//redux
import toggleDropdown from "./redux/dropdown/dropdown.action";
import DropdownActionTypes from "./redux/dropdown/dropdown.types";

import { togglePopup } from "./redux/popup/popup.action";

//utils
import {
  handleClickOutsideDropdown,
  handleClickOutsidePopup,
} from "./utils/utils";

//import styles
//test push
import "./App.css";

const Home = lazy(() => import("./pages/home/home.component"));
const RealEstate = lazy(() =>
  import("./pages/real-estate/real-estate.component")
);
const SignInSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);

class App extends React.Component {
  render() {
    const { toggleDropdown, togglePopup } = this.props;
    return (
      <div
        onMouseDown={(e) => {
          if (handleClickOutsideDropdown(e))
            toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE);
          if (handleClickOutsidePopup(e)) {
            togglePopup();
            document.body.style.overflowY = "visible";
          }
        }}
      >
        <Suspense fallback={<Spinner page />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path={"/real-estate/:id"}
              render={(props) => <RealEstate {...props} />}
            />
            <Route
              path={"/log-in-or-sign-up"}
              render={(props) => <SignInSignUp {...props} />}
            />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

//Redux

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: (toggle) => dispatch(toggleDropdown(toggle)),
  togglePopup: () => dispatch(togglePopup()),
});

export default connect(null, mapDispatchToProps)(App);
