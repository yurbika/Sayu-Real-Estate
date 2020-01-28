import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//utils
import { createLi } from "./dropdown.component.utils";

//component imports
import Input from "../input/input.component";
import { numberWithDots, onlyNumberkey } from "../input/input.utils";

//redux imports
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

import { setInput } from "../../redux/filter/filter.action";

import {
  selectMaxInput,
  selectMinInput,
  selectBezugsart
} from "../../redux/filter/filter.selectors";

import "./dropdowns.styles.scss";

//input erlaubt nur zahlen und keine anderen zeichen
//max input wird generiert durch den inputt von min
//es gibt eine zahl grenze für die eingebene zahlt und der input wird rot makiert
//wenn der dropdown geschlossen wird muss der state gesettz werden

const PreisDropdown = ({ maxInput, minInput, setInput, bezugsart }) => {
  return (
    <div className="dropdown-container preis-dropdown" ref={dropdownRef}>
      <div className="input-container">
        <Input
          id="min-input"
          placeholder="Min"
          dropdownInput
          autoFocus
          autoComplete="off"
          onFocus={() => {
            document.getElementById("preis-min").style.display = "block";
            document.getElementById("preis-max").style.display = "none";
          }}
          value={minInput}
          onChange={e => setInput(numberWithDots(e.target.value), "numberMin")}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="preis-min">
          {createLi(10, maxInput, "max-input", "numberMin", setInput)}
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
          autoComplete="off"
          onFocus={() => {
            document.getElementById("preis-min").style.display = "none";
            document.getElementById("preis-max").style.display = "block";
          }}
          value={maxInput}
          onChange={e => setInput(numberWithDots(e.target.value), "numberMax")}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="preis-max">{/*funktion*/}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  maxInput: selectMaxInput,
  minInput: selectMinInput,
  bezugsart: selectBezugsart
});

const mapDispatchToProps = dispatch => ({
  setInput: (event, prop) => dispatch(setInput(event, prop))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreisDropdown);
