/*
beim eintippen von einem buchstaben werden immer 12 ergebnisse angezeigt
leer zeichen und kommas trennen die strings
nachdem raus dem rausklicken wenn nichts ausgewählt wurde wird das erste ergeniss genommen
rechts ist ein x für das gesamte löschen

/////////
bundesländer
stadt - ort
straßen, plz - ort
////////
bei zahlen
plz - stadt
straßen, plz - ort



bundesländer reinbekommen erstes ziel
*/
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput
} from "../../redux/filter/filter.selectors";

import immoData from "../../immo-data/immo.data";
import { filterDatas } from "../../immo-data/immo-data.utils";

class Results extends React.Component {
  componentDidUpdate() {
    const { haustyp, input } = this.props;
    const {
      bundesländer,
      städteOrte,
      straßenPlzOrt,
      suchTreffer
    } = filterDatas(immoData, haustyp.toLowerCase(), input);
    console.log(bundesländer, städteOrte, straßenPlzOrt, suchTreffer);
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  input: selectSearchInput,
  haustyp: selectHaustyp
});

export default connect(mapStateToProps)(Results);
