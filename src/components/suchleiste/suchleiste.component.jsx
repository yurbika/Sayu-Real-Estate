//bibliotheken imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Component imports
import Input from "../../components/input/input.component";
import {
  checkInputValue,
  checkSearchInput
} from "../../components/input/input.utils";

import Button from "../../components/button/button.component";

import PreisDropdown from "../../components/dropdowns/preis-dropdown.component";
import AuswahlDropdown from "../dropdowns/auswahl-dropdown.component";
import Results from "../dropdowns/results-dropdown.component";

//redux
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
import {
  setPreis,
  resetInputMax,
  resetInputMin,
  setSearchInput
} from "../../redux/filter/filter.action";

import {
  selectPreisDropdown,
  selectBezugsartDropdown,
  selectImmobilientypDropdown,
  selectZimmerDropdown,
  selectFlächeDropdown,
  selectResultsDropdown
} from "../../redux/dropdown/dropdown.selectors";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

import { selectSuchtreffer } from "../../redux/results-dropdown/results.selectors";

//styles
import {
  SuchleisteContainer,
  Filter,
  InputContainer,
  InputContainerZeile,
  Bild
} from "./suchleiste.styles";

/*Button id ist hier notwendig damit die richtigen aktionen gefeuert 
werden damit ist es möglich die dropdowns von überall zu schließen*/

class Suchleiste extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      maxInput,
      minInput,
      setPreis,
      bezugsart,
      resetInputMax,
      resetInputMin
    } = this.props;
    if (prevProps.bezugsart !== bezugsart) {
      resetInputMax();
      resetInputMin();
    }
    if (prevProps.minInput !== minInput || prevProps.maxInput !== maxInput)
      setPreis(checkInputValue(minInput, maxInput));
  }
  render() {
    const {
      bezugsart,
      input,
      preis,
      zimmerAnzahl,
      haustype,
      fläche,
      preisDropdown,
      bezugsartDropdown,
      immobilientypDropdown,
      zimmerDropdown,
      flächeDropdown,
      toggleDropdown,
      setSearchInput,
      resultsDropdown,
      suchtreffer
    } = this.props;
    return (
      <SuchleisteContainer>
        <Filter>
          <Bild />
          <p>Finden Sie Ihre neues Zuhause</p>
          <h1>Bereit zum Umziehen?</h1>
          {/*Buttons und Inputs*/}
          <InputContainer>
            <InputContainerZeile>
              <Input
                inputStartseite
                inputType="search"
                placeholder="Wo: Ort, Bundesland oder PLZ"
                value={input}
                onChange={e => {
                  setSearchInput(e.target.value);
                  if (!!input)
                    toggleDropdown(DropdownActionTypes.TOGGLE_RESULTS_HIDDEN);
                }}
                onKeyPress={e => checkSearchInput(e)}
              />
              <Button
                normalerButton
                onClick={() =>
                  toggleDropdown(
                    DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN
                  )
                }
                id="filter-button"
              >
                {bezugsart}
              </Button>
              <Button
                normalerButton
                onClick={() =>
                  toggleDropdown(
                    DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN
                  )
                }
                id="filter-button"
              >
                {haustype}
              </Button>
              <Button suchButton>Suchen</Button>
            </InputContainerZeile>
            {/*zweite Reihe der Suchleiste*/}
            <InputContainerZeile>
              <Button
                sekundärerButton
                preis
                onClick={() =>
                  toggleDropdown(
                    DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN
                  )
                }
                id="filter-button"
              >
                {preis}
              </Button>
              <Button
                sekundärerButton
                onClick={() =>
                  toggleDropdown(
                    DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN
                  )
                }
                id="filter-button"
              >
                {zimmerAnzahl}
              </Button>
              <Button
                sekundärerButton
                onClick={() =>
                  toggleDropdown(
                    DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN
                  )
                }
                id="filter-button"
              >
                {fläche}
              </Button>
            </InputContainerZeile>
          </InputContainer>
          {/***********************************
           *        Die Dropdowns             *
           ************************************/}
          {(resultsDropdown && !!suchtreffer) || !!input ? <Results /> : null}
          {preisDropdown ? <PreisDropdown /> : null}
          {bezugsartDropdown ? (
            <AuswahlDropdown
              children={[bezugsart === "Mieten" ? "Kaufen" : "Mieten"]}
            />
          ) : null}
          {immobilientypDropdown ? (
            <AuswahlDropdown
              additionalStyle="haus"
              children={[haustype === "Wohnung" ? "Haus" : "Wohnung"]}
            />
          ) : null}
          {zimmerDropdown ? (
            <AuswahlDropdown
              additionalStyle="zimmer-dropdown"
              children={["1 +", "2 +", "3 +", "4 +", "5 +"]}
            />
          ) : null}
          {flächeDropdown ? (
            <AuswahlDropdown
              additionalStyle="flaeche-dropdown"
              children={["70 +", "100 +", "200 +", "300 +", "400 +", "500 +"]}
            />
          ) : null}
          {/************/}
        </Filter>
      </SuchleisteContainer>
    );
  }
}

//Redux

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  preis: selectPreis,
  input: selectSearchInput,
  zimmerAnzahl: selectZimmerAnzahl,
  fläche: selectFläche,
  haustype: selectHaustyp,
  minInput: selectMinInput,
  maxInput: selectMaxInput,
  //Dropdown States
  preisDropdown: selectPreisDropdown,
  bezugsartDropdown: selectBezugsartDropdown,
  immobilientypDropdown: selectImmobilientypDropdown,
  zimmerDropdown: selectZimmerDropdown,
  flächeDropdown: selectFlächeDropdown,
  resultsDropdown: selectResultsDropdown,
  //Results States
  suchtreffer: selectSuchtreffer
});

const mapDispatchToProps = dispatch => ({
  //dropdown action
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle)),
  //filter action
  setPreis: preis => dispatch(setPreis(preis)),
  resetInputMax: () => dispatch(resetInputMax()),
  resetInputMin: () => dispatch(resetInputMin()),
  setSearchInput: value => dispatch(setSearchInput(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Suchleiste);
