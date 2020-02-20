import React from "react";
import { connect } from "react-redux";

//redux
import { setArt } from "../../redux/filter/filter.action";

import { dropdownRef } from "../../redux/dropdown/dropdown.utils";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//utils
import { ID_GENERATOR } from "../../uniqueKey";

//styles
import { AuswahlDropdownContainer, DropdownContainer } from "./dropdown.styles";

const AuswahlDropdown = ({
  children,
  setArt,
  additionalStyle,
  toggleDropdown,
  type
}) => {
  return (
    <AuswahlDropdownContainer>
      <DropdownContainer additionalStyle={additionalStyle} ref={dropdownRef}>
        <ul>
          {children.map(child => (
            <li
              key={ID_GENERATOR("AuswahlDropdown-li-")}
              onClick={() => {
                if (
                  additionalStyle === "zimmer-dropdown" ||
                  additionalStyle === "flaeche-dropdown"
                )
                  setArt(child, type);
                else setArt(child, type);
                toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE);
              }}
            >
              {child}
            </li>
          ))}
        </ul>
      </DropdownContainer>
    </AuswahlDropdownContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  setArt: (text, type) => dispatch(setArt(text, type)),
  toggleDropdown: type => dispatch(toggleDropdown(type))
});

export default connect(null, mapDispatchToProps)(AuswahlDropdown);
