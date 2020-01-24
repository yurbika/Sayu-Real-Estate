import React from "react";

import Input from "../input/input.component";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert

export const PreisDropdown = () => (
  <div className="dropdown-container preis-dropdown">
    <div className="input-container">
      <Input
        placeholder="Min"
        dropdownInput
        autoFocus
        number
        onClick={() => {
          document.getElementById("preis-min").style.display = "block";
          document.getElementById("preis-max").style.display = "none";
        }}
      />
      <ul id="preis-min">
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
      </ul>
    </div>
    <div>
      <span></span>
    </div>
    <div className="input-container">
      <Input
        placeholder="Max"
        dropdownInput
        number
        onClick={() => {
          document.getElementById("preis-min").style.display = "none";
          document.getElementById("preis-max").style.display = "block";
        }}
      />
      <ul id="preis-max">
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
        <li>0 €</li>
      </ul>
    </div>
  </div>
);

export const ZimmerDropdown = () => (
  <div className="dropdown-container zimmer-dropdown">
    <div></div>
  </div>
);

export const FlaecheDropdown = () => (
  <div className="dropdown-container flaeche-dropdown">
    <div></div>
  </div>
);
