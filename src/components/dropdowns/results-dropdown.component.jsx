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

import { setSearchInput } from "../../redux/filter/filter.action";

import { dropdownRef } from "../../redux/dropdown/dropdown.utils";
import toggleDropdown from "../../redux/dropdown/dropdown.action.js";
import { selectResultsDropdown } from "../../redux/dropdown/dropdown.selectors";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

class Results extends React.Component {
  componentDidMount() {
    const {
      haustyp,
      input,
      setBundesländer,
      setStraßenPlzOrte,
      setStädteOrte,
      setSuchtreffer,
      bezugsart
    } = this.props;
    const {
      bundeslaenderArray,
      staedteOrteArray,
      straßenPlzOrtArray,
      suchtreffer
    } = filterDatas(
      immoData,
      haustyp.toLowerCase(),
      bezugsart.toLowerCase(),
      input
    );
    setSuchtreffer(suchtreffer);
    setBundesländer(bundeslaenderArray);
    setStraßenPlzOrte(straßenPlzOrtArray);
    setStädteOrte(staedteOrteArray);
  }
  componentDidUpdate(prevProps) {
    const {
      haustyp,
      input,
      setBundesländer,
      setStraßenPlzOrte,
      setStädteOrte,
      setSuchtreffer,
      bezugsart
    } = this.props;
    const {
      bundeslaenderArray,
      staedteOrteArray,
      straßenPlzOrtArray,
      suchtreffer
    } = filterDatas(
      immoData,
      haustyp.toLowerCase(),
      bezugsart.toLowerCase(),
      input
    );

    if (prevProps.input !== this.props.input) {
      setSuchtreffer(suchtreffer);
      setBundesländer(bundeslaenderArray);
      setStraßenPlzOrte(straßenPlzOrtArray);
      setStädteOrte(staedteOrteArray);
    }
  }
  render() {
    const {
      bundeslaenderArray,
      staedteOrteArray,
      straßenPlzOrt,
      setSearchInput,
      toggleDropdown
    } = this.props;
    return (
      <div className="results-container" ref={dropdownRef}>
        <div className="dropdown-container results">
          {!!bundeslaenderArray.length ? <h4>Bundesländer</h4> : null}
          {!!bundeslaenderArray.length ? (
            <ul>
              {bundeslaenderArray.map(item => (
                <li
                  key={ID_GENERATOR("bundeslaenderArray-")}
                  onClick={e => {
                    setSearchInput(e.currentTarget.textContent);
                    toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {!!staedteOrteArray.length ? <h4>Ortschaften</h4> : null}
          {!!staedteOrteArray.length ? (
            <ul>
              {staedteOrteArray.map(item => (
                <li
                  key={ID_GENERATOR("staedteOrteArray-")}
                  onClick={e => {
                    setSearchInput(e.currentTarget.textContent);
                    toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {!!straßenPlzOrt.length ? <h4>Straßen</h4> : null}
          {!!straßenPlzOrt.length ? (
            <ul>
              {straßenPlzOrt.map(item => (
                <li
                  key={ID_GENERATOR("straßenPlzOrt-")}
                  onClick={e => {
                    setSearchInput(e.currentTarget.textContent);
                    toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                  }}
                >
                  {item}
                </li>
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
  bundeslaenderArray: selectBundesländer,
  staedteOrteArray: selectStädteOrte,
  straßenPlzOrt: selectStraßenPlzOrt,
  suchtreffer: selectSuchtreffer,
  //Dropdown
  resultsDropdown: selectResultsDropdown
});

const mapDispatchToProps = dispatch => ({
  setBundesländer: bundesländerArray =>
    dispatch(setBundesländer(bundesländerArray)),
  setStädteOrte: städteOrteArray => dispatch(setStädteOrte(städteOrteArray)),
  setStraßenPlzOrte: straßenPlzOrteArray =>
    dispatch(setStraßenPlzOrte(straßenPlzOrteArray)),
  setSuchtreffer: num => dispatch(setSuchtreffer(num)),
  toggleDropdown: type => dispatch(toggleDropdown(type)),
  setSearchInput: text => dispatch(setSearchInput(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
