import React from "react";

import Input from "../input/input.component";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert

export const PreisDropdown = () => (
  <div className="dropdown-container preis-dropdown">
    <Input placeholder="Min" dropdownInput number></Input>
    <div>
      <span></span>
    </div>
    <Input placeholder="Max" dropdownInput number></Input>
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
