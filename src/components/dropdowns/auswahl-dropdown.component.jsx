import React from "react";
import { connect } from "react-redux";
import { setArt } from "../../redux/filter/filter.action";
import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

import FilterActionTypes from "../../redux/filter/filter.types";

import "./dropdowns.styles.scss";

const AuswahlDropdown = ({ children, setArt, haus }) => {
  let type = "";
  if (children === "Mieten" || children === "Kaufen")
    type = FilterActionTypes.SET_BEZUGSART;
  else type = FilterActionTypes.SET_HAUSTYP;
  return (
    <div
      className={"dropdown-container auswahl-dropdown " + haus}
      onClick={() => setArt(children, type)}
      ref={dropdownRef}
    >
      <div>{children}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setArt: (text, type) => dispatch(setArt(text, type))
});

export default connect(null, mapDispatchToProps)(AuswahlDropdown);
