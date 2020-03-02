import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Sayu-Immo-Logo.svg";

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
  <HeaderContainer className={location.pathname === "/" ? "startseite" : ""}>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer
      className={
        location.pathname === "/registrieren"
          ? "hidden"
          : location.pathname === "/anmelden"
          ? "hidden"
          : ""
      }
    >
      <OptionLink className={location.pathname === "/" ? "aktiv" : ""} to="/">
        <span>Startseite</span>
      </OptionLink>
      <OptionLink
        className={location.pathname === "/liste" ? "aktiv liste" : ""}
        to="/liste"
      >
        <span>Liste</span>
      </OptionLink>
      <OptionLink to="/registrieren" className="registrieren">
        Registrieren
      </OptionLink>
      <OptionLink to="/anmelden">Anmelden</OptionLink>
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
        location.pathname === "/registrieren"
          ? "hidden"
          : location.pathname === "/anmelden"
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
            <span>Startseite</span>
          </OptionLink>
          <OptionLink
            className={location.pathname === "/liste" ? "aktiv liste" : ""}
            to="/liste"
          >
            <span>Liste</span>
          </OptionLink>
          <OptionLink
            to="/registrieren"
            className="registrieren"
            responsiv={"responsiv"}
          >
            Registrieren
          </OptionLink>
          <OptionLink to="/anmelden" responsiv={"responsiv"}>
            Anmelden
          </OptionLink>
        </ResponsiveMenu>
      </ResponsiveMenuContainer>
    </HamburgerMenu>
  </HeaderContainer>
);

export default withRouter(Header);
