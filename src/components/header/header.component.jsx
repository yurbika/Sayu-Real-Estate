import React from "react";

import { ReactComponent as Logo } from "../../assets/Sayu-Immo-Logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">Startseite</OptionLink>
      <OptionLink to="/karte">Karte</OptionLink>
      <OptionLink to="/inspiration">Inspiration</OptionLink>
      <OptionLink to="/registrieren" className="registrieren">
        Registrieren
      </OptionLink>
      <OptionLink to="/anmelden">Anmelden</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
