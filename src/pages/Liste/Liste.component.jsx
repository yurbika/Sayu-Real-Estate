import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Suchleiste from "../../components/suchleiste/suchleiste.component";
import { SuchleisteContainer } from "../../components/suchleiste/suchleiste.styles";

//redux imports
import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput,
  selectZimmerAnzahl,
  selectPreis,
  selectFläche,
  selectMaxInput,
  selectMinInput
} from "../../redux/filter/filter.selectors";

//utils
import { filterData } from "../../immo-data/immo-data.utils.js";

import "./Liste.styles.scss";

class Liste extends React.Component {
  render() {
    const {
      maxInput,
      minInput,
      bezugsart,
      haustyp,
      input,
      zimmerAnzahl,
      fläche
    } = this.props;
    //test für den input falls die seite ohne input angeklickt wird
    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter(i => i) : "";

    let filter = {
      haustyp: `${haustyp}`,
      bezugsart: `${bezugsart}`,
      search: `${splitedStr.length > 0 ? input : "e"}`,
      minInput: `${minInput}`,
      maxInput: `${maxInput}`,
      zimmerAnzahl: `${zimmerAnzahl}`,
      wohnfläche: `${fläche}`
    };
    const { alleErgebnisse } = filterData(filter);
    console.log(alleErgebnisse);
    return (
      <div>
        <SuchleisteContainer additionalStyle={"liste"}>
          <Suchleiste additionalStyle={"liste"} />
        </SuchleisteContainer>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  preis: selectPreis,
  input: selectSearchInput,
  zimmerAnzahl: selectZimmerAnzahl,
  fläche: selectFläche,
  haustyp: selectHaustyp,
  minInput: selectMinInput,
  maxInput: selectMaxInput
});

export default connect(mapStateToProps)(Liste);
