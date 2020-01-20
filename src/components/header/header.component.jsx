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
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className={location.pathname === "/" ? "home" : ""} to="/">
        <span>Startseite</span>
      </OptionLink>
      <OptionLink
        className={location.pathname === "/karte" ? "karte" : ""}
        to="/karte"
      >
        <span>Karte</span>
      </OptionLink>
      <OptionLink to="/registrieren" className="registrieren">
        Registrieren
      </OptionLink>
      <OptionLink to="/anmelden">Anmelden</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default withRouter(Header);
