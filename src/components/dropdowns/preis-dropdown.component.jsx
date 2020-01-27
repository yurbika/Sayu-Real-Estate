import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component imports
import Input from "../input/input.component";
import { numberWithDots, onlyNumberkey } from "../input/input.utils";

//redux imports
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

import { setInput } from "../../redux/filter/filter.action";

import {
  selectMaxInput,
  selectMinInput
} from "../../redux/filter/filter.selectors";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert
//wenn der dropdown geschlossen wird muss der state gesettz werden

const PreisDropdown = ({ maxInput, minInput, setInput }) => (
  <div className="dropdown-container preis-dropdown" ref={dropdownRef}>
    <div className="input-container">
      <Input
        placeholder="Min"
        dropdownInput
        autoFocus
        onFocus={() => {
          document.getElementById("preis-min").style.display = "block";
          document.getElementById("preis-max").style.display = "none";
        }}
        value={minInput}
        onChange={e => setInput(numberWithDots(e.target.value), "numberMin")}
        onKeyPress={e => onlyNumberkey(e)}
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
        onFocus={() => {
          document.getElementById("preis-min").style.display = "none";
          document.getElementById("preis-max").style.display = "block";
        }}
        value={maxInput}
        onChange={e => setInput(numberWithDots(e.target.value), "numberMax")}
        onKeyPress={e => onlyNumberkey(e)}
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

const mapStateToProps = createStructuredSelector({
  maxInput: selectMaxInput,
  minInput: selectMinInput
});

const mapDispatchToProps = dispatch => ({
  setInput: (event, prop) => dispatch(setInput(event, prop))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreisDropdown);
