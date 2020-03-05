import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component import
import Suchleiste from "../../components/suchleiste/suchleiste.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

import ImmoPreview from "../../components/immo-preview/immo-preview.component";

import Popup from "../../components/popup/popup.component";

import PageChanger from "../../components/page-changer/page-changer.component";

//redux imports
import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput,
  selectZimmerAnzahl,
  selectPreis,
  selectFläche,
  selectMaxInput,
  selectMinInput,
  selectSeite
} from "../../redux/filter/filter.selectors";

import { selectPopupState } from "../../redux/popup/popup.selectors";

//utils
import { filterData } from "../../immo-data/immo-data.utils.js";
import { ID_GENERATOR } from "../../uniqueKey.js";

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
      fläche,
      popShow,
      seite
    } = this.props;
    //test für den input falls die seite ohne input angeklickt wird
    let splitedStr = !!input ? input.split(/[ ,-]+/) : "";
    splitedStr = !!input ? splitedStr.filter(i => i) : "";
    //falls der input leer ist wird nach dem buchstaben e gefiltert
    //der buchstabe e ist der meist genutzte
    let filter = {
      haustyp: `${haustyp}`,
      bezugsart: `${bezugsart}`,
      search: `${splitedStr.length > 0 ? input : "e"}`,
      minInput: `${minInput}`,
      maxInput: `${maxInput}`,
      zimmerAnzahl: `${zimmerAnzahl}`,
      wohnfläche: `${fläche}`
    };
    let { alleErgebnisse } = filterData(filter);

    //falls es suchtreffer gibt ein fallback
    let noResults = false;
    if (alleErgebnisse.length === 0) {
      noResults = true;
      filter = {
        haustyp: `${haustyp}`,
        bezugsart: `${bezugsart}`,
        search: "e",
        minInput: `${minInput}`,
        maxInput: `${maxInput}`,
        zimmerAnzahl: `${zimmerAnzahl}`,
        wohnfläche: `${fläche}`
      };
      alleErgebnisse = filterData(filter).alleErgebnisse;
    }
    return (
      <div className="container-liste">
        <Header />
        <div className="container-suchleiste-immo">
          <Suchleiste noBackground additionalStyle={"liste"} />
          {noResults ? (
            <span className="no-results">Keine Ergebnisse</span>
          ) : null}
          <div className="immo-preview-container">
            {alleErgebnisse.map((item, index) => {
              //wenn die index zahl geändert wird muss es auch im slider reducer die array anzahl angepasst werden
              if (seite > 1) index += 20 * seite;
              if (index < 20 * seite)
                return (
                  <ImmoPreview
                    immo={item}
                    id={index % 20}
                    key={ID_GENERATOR("immobilien-seite-")}
                  />
                );
              return null;
            })}
          </div>
        </div>
        {popShow ? <Popup /> : null}
        <PageChanger anzahlSeiten={alleErgebnisse.length / 20} />
        <Footer />
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
  maxInput: selectMaxInput,
  curPage: selectSeite,
  //popup
  popShow: selectPopupState
});

export default connect(mapStateToProps)(Liste);
