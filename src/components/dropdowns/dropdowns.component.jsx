import React from "react";

import Input from "../input/input.component";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert

export const PreisDropdown = () => (
  <div className="dropdown-container preis-dropdown">
    <Input placeholder="Min" number></Input>
    <div>
      <span></span>
    </div>
    <Input placeholder="Max"></Input>
  </div>
);

export const BezugsartDropdown = () => (
  <div className="dropdown-container">
    <div></div>
  </div>
);

export const HaustypDropdown = () => (
  <div className="dropdown-container">
    <div></div>
  </div>
);

export const ZimmerDropdown = () => (
  <div className="dropdown-container">
    <div></div>
  </div>
);

export const FlächeDropdown = () => (
  <div className="dropdown-container">
    <div></div>
  </div>
);
