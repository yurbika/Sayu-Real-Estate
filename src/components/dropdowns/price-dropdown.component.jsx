import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//utils
import {
  createLiRentMin,
  createLiRentMax,
  createLiBuyMin,
  createLiBuyMax
} from "./dropdown.component.utils";

//component imports
import Input from "../input/input.component";
import { numberWithDots, onlyNumberkey, testNum } from "../input/input.utils";

//redux imports
import { dropdownRef } from "../../utils/utils";
import toggleDropdown from "../../redux/dropdown/dropdown.action";

import {
  setInputMax,
  setInputMin,
  resetInputMax,
  resetInputMin
} from "../../redux/filter/filter.action";

import {
  selectMaxInput,
  selectMinInput,
  selectBezugsart
} from "../../redux/filter/filter.selectors";

//styles
import {
  DropdownContainer,
  InputListContainer,
  DashSymbole
} from "./dropdown.styles";

const PreisDropdown = ({
  maxInput,
  minInput,
  setInputMax,
  setInputMin,
  bezugsart,
  toggleDropdown,
  resetInputMin,
  resetInputMax,
  additionalStyle
}) => {
  return (
    <DropdownContainer additionalStyle={additionalStyle} ref={dropdownRef}>
      <InputListContainer>
        <Input
          placeholder="Min"
          //this attribute is for the input styling
          dropdownInput
          autoFocus
          onFocus={() => {
            document.getElementById("price-min").style.display = "inline-block";
            document.getElementById("price-max").style.display = "none";
          }}
          value={testNum(minInput) ? minInput : resetInputMin()}
          onChange={e => setInputMin(numberWithDots(e.target.value))}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="price-min">
          {bezugsart === "Mieten"
            ? createLiRentMin(10, maxInput, "max-input", setInputMin)
            : createLiBuyMin(10, maxInput, "max-input", setInputMin)}
        </ul>
      </InputListContainer>
      <DashSymbole>
        <span></span>
      </DashSymbole>
      <InputListContainer>
        <Input
          //this attribute is nessecary for the createLi function, to set focus
          id="max-input"
          placeholder="Max"
          //this attribute is for the input styling
          dropdownInput
          onFocus={() => {
            document.getElementById("price-min").style.display = "none";
            document.getElementById("price-max").style.display = "inline-block";
          }}
          value={testNum(maxInput) ? maxInput : resetInputMax()}
          onChange={e => setInputMax(numberWithDots(e.target.value))}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="price-max">
          {bezugsart === "Mieten"
            ? createLiRentMax(10, minInput, setInputMax, toggleDropdown)
            : createLiBuyMax(10, minInput, setInputMax, toggleDropdown)}
        </ul>
      </InputListContainer>
    </DropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  maxInput: selectMaxInput,
  minInput: selectMinInput,
  bezugsart: selectBezugsart
});

const mapDispatchToProps = dispatch => ({
  setInputMax: preis => dispatch(setInputMax(preis)),
  setInputMin: preis => dispatch(setInputMin(preis)),
  toggleDropdown: type => dispatch(toggleDropdown(type)),
  resetInputMax: () => dispatch(resetInputMax()),
  resetInputMin: () => dispatch(resetInputMin())
});

export default connect(mapStateToProps, mapDispatchToProps)(PreisDropdown);
