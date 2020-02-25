import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Suchleiste from "../../components/suchleiste/suchleiste.component";
import { SuchleisteContainer } from "../../components/suchleiste/suchleiste.styles";
import Footer from "../../components/footer/footer.component";

import ImmoPreview from "../../components/immo-preview/immo-preview.component";

import Popup from "../../components/popup/popup.component";

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
      popShow
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
    const { alleErgebnisse } = filterData(filter);
    return (
      <div className="container-liste">
        <div className="container-suchleiste-immo">
          <SuchleisteContainer additionalStyle={"liste"}>
            <Suchleiste additionalStyle={"liste"} />
          </SuchleisteContainer>
          <div className="immo-preview-container">
            {alleErgebnisse.map((item, index) =>
              index < 20 ? (
                <ImmoPreview
                  immo={item}
                  id={index}
                  key={ID_GENERATOR("immobilien-seite-")}
                />
              ) : null
            )}
          </div>
        </div>
        {popShow ? <Popup /> : null}
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
  //popup
  popShow: selectPopupState
});

export default connect(mapStateToProps)(Liste);
