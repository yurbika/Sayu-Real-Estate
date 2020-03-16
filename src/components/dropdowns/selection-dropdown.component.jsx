import React from "react";
import { connect } from "react-redux";

//redux
import { setArt } from "../../redux/filter/filter.action";

import { dropdownRef } from "../../utils/utils";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import { resetSliderPositions } from "../../redux/slider/slider.action";

//utils
import { ID_GENERATOR } from "../../uniqueKey";

//styles
import { DropdownContainer } from "./dropdown.styles";

const SelectionDropdown = ({
  children,
  setArt,
  additionalStyle,
  backToTop,
  toggleDropdown,
  resetSliderPositions,
  type
}) => {
  return (
    <DropdownContainer additionalStyle={additionalStyle} ref={dropdownRef}>
      <ul>
        {children.map(child => (
          <li
            key={ID_GENERATOR("SelectionDropdown-li-")}
            onClick={() => {
              setArt(child, type);
              toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE);
              if (backToTop) {
                window.scrollTo(0, 0);
                resetSliderPositions();
              }
            }}
          >
            {child}
          </li>
        ))}
      </ul>
    </DropdownContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  setArt: (text, type) => dispatch(setArt(text, type)),
  toggleDropdown: type => dispatch(toggleDropdown(type)),
  //slider action
  resetSliderPositions: () => dispatch(resetSliderPositions())
});

export default connect(null, mapDispatchToProps)(SelectionDropdown);
