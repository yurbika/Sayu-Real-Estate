import React from "react";
import { connect } from "react-redux";

//redux
import { setArt } from "../../redux/filter/filter.action";

import { dropdownRef } from "../../redux/dropdown/dropdown.utils";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//utils
import { typSetter } from "./dropdown.component.utils";

import "./dropdowns.styles.scss";

const AuswahlDropdown = ({
  children,
  setArt,
  additionalStyle,
  toggleDropdown
}) => {
  return (
    <div
      className={
        "dropdown-container auswahl-dropdown " +
        (additionalStyle !== undefined ? additionalStyle : "")
      }
      ref={dropdownRef}
    >
      <ul>
        {children.map(child => (
          <li
            key={child}
            onClick={() => {
              setArt(child, typSetter(child));
              toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE);
            }}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setArt: (text, type) => dispatch(setArt(text, type)),
  toggleDropdown: type => dispatch(toggleDropdown(type))
});

export default connect(null, mapDispatchToProps)(AuswahlDropdown);
