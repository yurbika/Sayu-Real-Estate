import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//utils
import { createLiMietenMin, createLiMax } from "./dropdown.component.utils";

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

const PreisDropdown = ({ maxInput, minInput, setInput }) => {
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
          {createLiMietenMin(10, maxInput, "max-input", "numberMin", setInput)}
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
        <ul id="preis-max">
          {createLiMax(10, minInput, "numberMax", setInput)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  maxInput: selectMaxInput,
  minInput: selectMinInput
});

const mapDispatchToProps = dispatch => ({
  setInput: (event, prop) => dispatch(setInput(event, prop))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreisDropdown);
