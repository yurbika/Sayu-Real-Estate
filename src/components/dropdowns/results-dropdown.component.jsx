import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ID_GENERATOR } from "../../uniqueKey";

//redux imports
import {
  selectFederalstates,
  selectStreetsPostcodeLocalities,
  selectCitiesLocalities,
  selectHits,
} from "../../redux/results-dropdown/results.selectors";

import {
  selectObtainingType,
  selectRealEstateType,
  selectSearchInput,
} from "../../redux/filter/filter.selectors";

import { setSearchInput } from "../../redux/filter/filter.action";

import toggleDropdown from "../../redux/dropdown/dropdown.action.js";
import { selectResultsDropdown } from "../../redux/dropdown/dropdown.selectors";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//utils
import { dropdownRef } from "../../utils/utils";

//styles
import { DropdownContainer } from "./dropdown.styles";

const ResultsDropdown = ({
  federalstatesArray,
  citiesLocalitiesArray,
  streetsPostcodeLocalitiesArray,
  setSearchInput,
  toggleDropdown,
  additionalStyle,
  ...otherProps
}) => {
  return (
    <DropdownContainer
      ref={dropdownRef}
      additionalStyle={additionalStyle}
      tabIndex="0"
    >
      {!!federalstatesArray.length ? <h4>Federal-States</h4> : null}
      {!!federalstatesArray.length ? (
        <ul>
          {federalstatesArray.map((item) => (
            <li
              tabIndex="0"
              key={ID_GENERATOR("federal-states-array-")}
              onClick={(e) => {
                setSearchInput(e.currentTarget.textContent);
                toggleDropdown(
                  DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                );
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {!!citiesLocalitiesArray.length ? <h4>Localities</h4> : null}
      {!!citiesLocalitiesArray.length ? (
        <ul>
          {citiesLocalitiesArray.map((item) => (
            <li
              tabIndex="0"
              key={ID_GENERATOR("city-locality-array-")}
              onClick={(e) => {
                setSearchInput(e.currentTarget.textContent);
                toggleDropdown(
                  DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                );
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {!!streetsPostcodeLocalitiesArray.length ? <h4>Streets</h4> : null}
      {!!streetsPostcodeLocalitiesArray.length ? (
        <ul>
          {streetsPostcodeLocalitiesArray.map((item) => (
            <li
              tabIndex="0"
              key={ID_GENERATOR("street-postcode-locality-array-")}
              onClick={(e) => {
                setSearchInput(e.currentTarget.textContent);
                toggleDropdown(
                  DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN
                );
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
  obtainingType: selectObtainingType,
  input: selectSearchInput,
  realEstateType: selectRealEstateType,
  //Result States
  federalstatesArray: selectFederalstates,
  citiesLocalitiesArray: selectCitiesLocalities,
  streetsPostcodeLocalitiesArray: selectStreetsPostcodeLocalities,
  hits: selectHits,
  //Dropdown
  resultsDropdown: selectResultsDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: (type) => dispatch(toggleDropdown(type)),
  setSearchInput: (text) => dispatch(setSearchInput(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsDropdown);
