import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//redux
import {
  toggleLogIn,
  toggleSignIn
} from "../../redux/sign-in-and-sign-up/sign-in-and-sign-up.action";

//assets
import { ReactComponent as Logo } from "../../assets/Sayu-Logo.svg";

//styles
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HamburgerMenu,
  HamburgerMenuItems,
  ResponsiveMenuContainer,
  ResponsiveMenu
} from "./header.styles";

const Header = ({ toggleLogIn, toggleSignIn, location, match }) => (
  <HeaderContainer className={location.pathname === "/" ? "home" : ""}>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer
      className={location.pathname === "/log-in-or-sign-up" ? "hidden" : ""}
    >
      <OptionLink className={location.pathname === "/" ? "aktiv" : ""} to="/">
        <span>Home</span>
      </OptionLink>
      <OptionLink
        className={match.path === "/real-estate/:id" ? "aktiv real-estate" : ""}
        to="/real-estate/1"
      >
        <span>Real Estates</span>
      </OptionLink>
      <OptionLink
        to="/log-in-or-sign-up"
        className="registration"
        onClick={() => toggleSignIn()}
      >
        Registration
      </OptionLink>
      <OptionLink to="/log-in-or-sign-up" onClick={() => toggleLogIn()}>
        Log In
      </OptionLink>
    </OptionsContainer>
    <HamburgerMenu
      onClick={() => {
        if (
          !document.getElementById("menu-item").classList.contains("animate")
        ) {
          document.getElementById("menu-item").classList.add("animate");
          document
            .getElementById("responsive-menu-container")
            .classList.add("hidden");
          document.getElementById("responsive-menu").classList.add("slide-in");
          document.body.style.overflowY = "hidden";
        } else {
          document.getElementById("menu-item").classList.remove("animate");
          document
            .getElementById("responsive-menu-container")
            .classList.remove("hidden");
          document
            .getElementById("responsive-menu")
            .classList.remove("slide-in");
          document.body.style.overflowY = "visible";
        }
      }}
      className={location.pathname === "/log-in-or-sign-up" ? "hidden" : ""}
    >
      <HamburgerMenuItems id="menu-item" />
      <ResponsiveMenuContainer id="responsive-menu-container">
        <ResponsiveMenu id="responsive-menu">
          <OptionLink
            className={location.pathname === "/" ? "aktiv" : ""}
            to="/"
          >
            <span>Home</span>
          </OptionLink>
          <OptionLink
            className={
              match.path === "/real-estate/:id" ? "aktiv real-estate" : ""
            }
            to="/real-estate/1"
          >
            <span>Real Estate</span>
          </OptionLink>
          <OptionLink
            to="/log-in-or-sign-up"
            className="registration"
            onClick={() => toggleSignIn()}
            responsiv={"responsiv"}
          >
            Registration
          </OptionLink>
          <OptionLink
            to="/log-in-or-sign-up"
            responsiv={"responsiv"}
            onClick={() => toggleLogIn()}
          >
            Log In
          </OptionLink>
        </ResponsiveMenu>
      </ResponsiveMenuContainer>
    </HamburgerMenu>
  </HeaderContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleLogIn: () => dispatch(toggleLogIn()),
  toggleSignIn: () => dispatch(toggleSignIn())
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
