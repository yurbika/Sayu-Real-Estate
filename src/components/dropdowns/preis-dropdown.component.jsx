import React from "react";

import Input from "../input/input.component";
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert

const PreisDropdown = () => (
  <div className="dropdown-container preis-dropdown" ref={dropdownRef}>
    <div className="input-container">
      <Input
        placeholder="Min"
        dropdownInput
        autoFocus
        inputType="number"
        onClick={() => {
          document.getElementById("preis-min").style.display = "block";
          document.getElementById("preis-max").style.display = "none";
        }}
      />
      <ul id="preis-min">
        <li
          onClick={() => {
            document.getElementById("max-input").click();
            document.getElementById("max-input").focus();
          }}
        >
          0 €
        </li>
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
        id="max-input"
        placeholder="Max"
        dropdownInput
        inputType="number"
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

export default PreisDropdown;
