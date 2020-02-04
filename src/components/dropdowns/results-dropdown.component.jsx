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

const filterData = (data, haustyp, search = "") => {
  let test = [];
  //eingabe wird separiert, wird gebraucht um die regex aufzustellen
  let ruleArray = search.split(/[ ,]+/);
  //entfernt alles leere
  ruleArray = ruleArray.filter(i => i);
  //eigentliche länge des inputs ohne komma und leerzeichen
  //let lengthInput = search.replace(/[ ,]/g, "").split("").length;
  //console.log(ruleArray);
  //console.log(lengthInput);
  //
  let str = "(";
  for (let i = 0; i < ruleArray.length; i++) {
    str += ruleArray[i];
    if (i < ruleArray.length - 1) str += "|";
  }
  str += ")";
  let regex = new RegExp(`${str}`, "gi");
  console.log(regex);

  for (let i in data) {
    for (let query in data[i]) {
      if (query !== haustyp) continue;
      if (
        !test.includes(data[i][query]["adresse"]["bundesland"]) &&
        data[i][query]["adresse"]["bundesland"].match(regex) !== null &&
        search !== ""
      ) {
        if (
          data[i][query]["adresse"]["bundesland"].match(regex).length >=
          ruleArray.length
        )
          test.push(data[i][query]["adresse"]["bundesland"]);
      }
    }
  }
  console.log(test);
  let filteredData = data.filter((item, index) => {
    return item[haustyp];
  });
  return filteredData;
};

class Results extends React.Component {
  componentDidUpdate() {
    const { haustyp, input } = this.props;

    const result = filterData(immoData, haustyp.toLowerCase(), input);
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
