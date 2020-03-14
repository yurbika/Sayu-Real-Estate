import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ID_GENERATOR } from "../../uniqueKey";

//redux imports
import {
  selectBundesländer,
  selectStraßenPlzOrt,
  selectStädteOrte,
  selectSuchtreffer
} from "../../redux/results-dropdown/results.selectors";

import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput
} from "../../redux/filter/filter.selectors";

import { setSearchInput } from "../../redux/filter/filter.action";

import toggleDropdown from "../../redux/dropdown/dropdown.action.js";
import { selectResultsDropdown } from "../../redux/dropdown/dropdown.selectors";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//utils
import { dropdownRef } from "../../utils/utils";

//styles
import { DropdownContainer } from "./dropdown.styles";

const Results = ({
  bundeslaenderArray,
  staedteOrteArray,
  straßenPlzOrtArray,
  setSearchInput,
  toggleDropdown,
  additionalStyle
}) => {
  return (
    <DropdownContainer ref={dropdownRef} additionalStyle={additionalStyle}>
      {!!bundeslaenderArray.length ? <h4>Federal-States</h4> : null}
      {!!bundeslaenderArray.length ? (
        <ul>
          {bundeslaenderArray.map(item => (
            <li
              key={ID_GENERATOR("federal-states-array-")}
              onClick={e => {
                setSearchInput(e.currentTarget.textContent);
                toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {!!staedteOrteArray.length ? <h4>Localities</h4> : null}
      {!!staedteOrteArray.length ? (
        <ul>
          {staedteOrteArray.map(item => (
            <li
              key={ID_GENERATOR("city-locality-array-")}
              onClick={e => {
                setSearchInput(e.currentTarget.textContent);
                toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {!!straßenPlzOrtArray.length ? <h4>Streets</h4> : null}
      {!!straßenPlzOrtArray.length ? (
        <ul>
          {straßenPlzOrtArray.map(item => (
            <li
              key={ID_GENERATOR("street-postcode-locality-array-")}
              onClick={e => {
                setSearchInput(e.currentTarget.textContent);
                toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </DropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  input: selectSearchInput,
  haustyp: selectHaustyp,
  //Result States
  bundeslaenderArray: selectBundesländer,
  staedteOrteArray: selectStädteOrte,
  straßenPlzOrtArray: selectStraßenPlzOrt,
  suchtreffer: selectSuchtreffer,
  //Dropdown
  resultsDropdown: selectResultsDropdown
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: type => dispatch(toggleDropdown(type)),
  setSearchInput: text => dispatch(setSearchInput(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
