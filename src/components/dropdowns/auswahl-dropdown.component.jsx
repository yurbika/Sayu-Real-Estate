import React from "react";
import { connect } from "react-redux";

import { setArt } from "../../redux/filter/filter.action";
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import FilterActionTypes from "../../redux/filter/filter.types";

import "./dropdowns.styles.scss";

const AuswahlDropdown = ({ children, setArt, haus, toggleDropdown }) => {
  let type = "";
  //hier wird entschieden welcher setter benutz werden soll
  //d.h. welcher button kommt gerade rein
  if (children === "Mieten" || children === "Kaufen")
    type = FilterActionTypes.SET_BEZUGSART;
  else type = FilterActionTypes.SET_HAUSTYP;

  return (
    <div
      className={"dropdown-container auswahl-dropdown " + haus}
      onClick={() => {
        setArt(children, type);
        toggleDropdown(DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE);
      }}
      ref={dropdownRef}
    >
      <div>
        <span>{children}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setArt: (text, type) => dispatch(setArt(text, type)),
  toggleDropdown: type => dispatch(toggleDropdown(type))
});

export default connect(null, mapDispatchToProps)(AuswahlDropdown);
