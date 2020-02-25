import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//utils
import {
  createLiMietenMin,
  createLiMietenMax,
  createLiKaufenMin,
  createLiKaufenMax
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

import {
  DropdownContainer,
  InputContainer,
  BindeStrich
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
      <InputContainer>
        <Input
          placeholder="Min"
          //dieses Attribut ist für input.styles
          dropdownInput
          autoFocus
          onFocus={() => {
            document.getElementById("preis-min").style.display = "block";
            document.getElementById("preis-max").style.display = "none";
          }}
          value={testNum(minInput) ? minInput : resetInputMin()}
          onChange={e => setInputMin(numberWithDots(e.target.value))}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="preis-min">
          {bezugsart === "Mieten"
            ? createLiMietenMin(10, maxInput, "max-input", setInputMin)
            : createLiKaufenMin(10, maxInput, "max-input", setInputMin)}
        </ul>
      </InputContainer>
      <BindeStrich>
        <span></span>
      </BindeStrich>
      <InputContainer>
        <Input
          //dieses Attribut ist notwending für die createLi funktion damit der focus gesetzt werden kann
          id="max-input"
          placeholder="Max"
          //dieses Attribut ist für input.styles
          dropdownInput
          onFocus={() => {
            document.getElementById("preis-min").style.display = "none";
            document.getElementById("preis-max").style.display = "block";
          }}
          value={testNum(maxInput) ? maxInput : resetInputMax()}
          onChange={e => setInputMax(numberWithDots(e.target.value))}
          onKeyPress={e => onlyNumberkey(e)}
        />
        <ul id="preis-max">
          {bezugsart === "Mieten"
            ? createLiMietenMax(10, minInput, setInputMax, toggleDropdown)
            : createLiKaufenMax(10, minInput, setInputMax, toggleDropdown)}
        </ul>
      </InputContainer>
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
