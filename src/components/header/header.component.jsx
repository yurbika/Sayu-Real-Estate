import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Sayu-Logo.svg";

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

const Header = ({ location }) => (
  <HeaderContainer className={location.pathname === "/" ? "home" : ""}>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer
      className={
        location.pathname === "/registration"
          ? "hidden"
          : location.pathname === "/login"
          ? "hidden"
          : ""
      }
    >
      <OptionLink className={location.pathname === "/" ? "aktiv" : ""} to="/">
        <span>Home</span>
      </OptionLink>
      <OptionLink
        className={
          location.pathname === "/real-estate" ? "aktiv real-estate" : ""
        }
        to="/real-estate"
      >
        <span>Real Estates</span>
      </OptionLink>
      <OptionLink to="/registration" className="registration">
        Registration
      </OptionLink>
      <OptionLink to="/login">Login</OptionLink>
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
      className={
        location.pathname === "/registration"
          ? "hidden"
          : location.pathname === "/login"
          ? "hidden"
          : ""
      }
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
              location.pathname === "/real-estate" ? "aktiv real-estate" : ""
            }
            to="/real-estate"
          >
            <span>Real Estate</span>
          </OptionLink>
          <OptionLink
            to="/registration"
            className="registration"
            responsiv={"responsiv"}
          >
            Registration
          </OptionLink>
          <OptionLink to="/login" responsiv={"responsiv"}>
            Login
          </OptionLink>
        </ResponsiveMenu>
      </ResponsiveMenuContainer>
    </HamburgerMenu>
  </HeaderContainer>
);

export default withRouter(Header);
