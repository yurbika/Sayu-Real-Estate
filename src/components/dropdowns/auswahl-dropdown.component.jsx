import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectBezugsart } from "../../redux/filter/filter.selectors";
import { setArt } from "../../redux/filter/filter.action";

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
    >
      <div>{children}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bezugsart: selectBezugsart
});

const mapDispatchToProps = dispatch => ({
  setArt: (text, type) => dispatch(setArt(text, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuswahlDropdown);
