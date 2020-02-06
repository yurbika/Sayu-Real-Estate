import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import immoData from "../../immo-data/immo.data";
import { filterDatas } from "../../immo-data/immo-data.utils";

import { ID_GENERATOR } from "../../uniqueKey";

//redux imports
import {
  setBundesländer,
  setStraßenPlzOrte,
  setStädteOrte,
  setSuchtreffer
} from "../../redux/results-dropdown/results.action";

import {
  selectBundesländer,
  selectStraßenPlzOrt,
  selectStädteOrte,
  selectSuchtreffer
} from "../../redux/results-dropdown/results.selectors";

import {
  selectBezugsart,
  selectHaustyp,
  selectSearchInput
} from "../../redux/filter/filter.selectors";

import { dropdownRef } from "../../redux/dropdown/dropdown.utils";

class Results extends React.Component {
  componentDidMount() {
    const {
      haustyp,
      input,
      setBundesländer,
      setStraßenPlzOrte,
      setStädteOrte,
      setSuchtreffer
    } = this.props;
    const {
      bundeslaender,
      staedteOrte,
      straßenPlzOrt,
      suchTreffer
    } = filterDatas(immoData, haustyp.toLowerCase(), input);

    setBundesländer(bundeslaender);
    setStraßenPlzOrte(straßenPlzOrt);
    setStädteOrte(staedteOrte);
    setSuchtreffer(suchTreffer);
  }
  componentDidUpdate(prevProps) {
    const {
      haustyp,
      input,
      setBundesländer,
      setStraßenPlzOrte,
      setStädteOrte,
      setSuchtreffer
    } = this.props;
    const {
      bundeslaender,
      staedteOrte,
      straßenPlzOrt,
      suchTreffer
    } = filterDatas(immoData, haustyp.toLowerCase(), input);

    if (prevProps.input !== this.props.input) {
      setBundesländer(bundeslaender);
      setStraßenPlzOrte(straßenPlzOrt);
      setStädteOrte(staedteOrte);
      setSuchtreffer(suchTreffer);
    }
    // console.log(bundeslaender, staedteOrte, straßenPlzOrt, suchTreffer);
  }
  render() {
    const { bundeslaender, staedteOrte, straßenPlzOrt } = this.props;
    return (
      <div className="results-container" ref={dropdownRef}>
        <div className="dropdown-container results">
          {!!bundeslaender.length ? <h4>Bundesländer</h4> : null}
          {!!bundeslaender.length ? (
            <ul>
              {bundeslaender.map(item => (
                <li key={ID_GENERATOR("bundeslaender-")}>{item}</li>
              ))}
            </ul>
          ) : null}
          {!!staedteOrte.length ? <h4>Ortschaften</h4> : null}
          {!!staedteOrte.length ? (
            <ul>
              {staedteOrte.map(item => (
                <li key={ID_GENERATOR("staedteOrte-")}>{item}</li>
              ))}
            </ul>
          ) : null}
          {!!straßenPlzOrt.length ? <h4>Straßen</h4> : null}
          {!!straßenPlzOrt.length ? (
            <ul>
              {straßenPlzOrt.map(item => (
                <li key={ID_GENERATOR("straßenPlzOrt-")}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  input: selectSearchInput,
  haustyp: selectHaustyp,
  //Result States
  bundeslaender: selectBundesländer,
  staedteOrte: selectStädteOrte,
  straßenPlzOrt: selectStraßenPlzOrt,
  suchtreffer: selectSuchtreffer
});

const mapDispatchToProps = dispatch => ({
  setBundesländer: bundesländerArray =>
    dispatch(setBundesländer(bundesländerArray)),
  setStädteOrte: städteOrteArray => dispatch(setStädteOrte(städteOrteArray)),
  setStraßenPlzOrte: straßenPlzOrteArray =>
    dispatch(setStraßenPlzOrte(straßenPlzOrteArray)),
  setSuchtreffer: num => dispatch(setSuchtreffer(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
