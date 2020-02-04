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

import immoData from "../../immo.data";

const filterData = (data, query) => {
  let test = [];
  for (let i in data) {
    // console.log(data[i][query]["adresse"]["bundesland"]);
    for (let query in data[i])
      if (!test.includes(data[i][query]["adresse"]["bundesland"]))
        test.push(data[i][query]["adresse"]["bundesland"]);
  }
  console.log(test);
  let filteredData = data.filter((item, index) => {
    return item[query];
  });
  return filteredData;
};

class Results extends React.Component {
  componentDidMount() {
    const { haustyp } = this.props;

    const result = filterData(immoData, haustyp.toLowerCase());
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
