import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Sayu-Immo-Logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header-container">
    <Link className="logo-container" to="/">
      <Logo className="log" />
    </Link>
    <div className="options-container">
      <Link to="/">Startseite</Link>
      <Link to="/karte">Karte</Link>
      <Link to="/inspiration">Inspiration</Link>
      <Link to="/registrieren" className="registrieren">
        Registrieren
      </Link>
      <Link to="/anmelden">Anmelden</Link>
    </div>
  </div>
);

export default Header;
