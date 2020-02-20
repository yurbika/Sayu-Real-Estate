import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Sayu-Immo-Logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
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
  </HeaderContainer>
);

export default withRouter(Header);
