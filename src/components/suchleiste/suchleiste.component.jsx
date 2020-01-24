//bibliotheken imports
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Component imports
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import {
  PreisDropdown,
  ZimmerDropdown,
  FlaecheDropdown
} from "../../components/dropdowns/dropdowns.component";

import AuswahlDropdown from "../dropdowns/auswahl-dropdown.component";

//selektoren redux
import {
  selectBezugsart,
  selectHaustyp,
  selectInput,
  selectZimmerAnzahl,
  selectPreis,
  selectFläche
} from "../../redux/filter/filter.selectors";

import {
  selectPreisDropdown,
  selectBezugsartDropdown,
  selectImmobilientypDropdown,
  selectZimmerDropdown,
  selectFlächeDropdown
} from "../../redux/dropdown/dropdown.selectors";
import toggleDropdown from "../../redux/dropdown/dropdown.action";
import DropdownActionTypes from "../../redux/dropdown/dropdown.types";

//styles
import {
  SuchleisteContainer,
  Filter,
  InputContainer,
  InputContainerZeile,
  Bild
} from "./suchleiste.styles";

//Button id ist hier notwendig damit die richtigen aktionen gefeuert werden damit ist es
//möglich die dropdowns von überall zu schließen

const Suchleiste = ({
  bezugsart,
  preis,
  zimmerAnzahl,
  haustype,
  fläche,
  preisDropdown,
  bezugsartDropdown,
  immobilientypDropdown,
  zimmerDropdown,
  flächeDropdown,
  toggleDropdown
}) => (
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
            type="search"
            placeholder="Wo: Ort, Bundesland oder PLZ"
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
              toggleDropdown(DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN)
            }
            id="filter-button"
          >
            {preis}
          </Button>
          <Button
            sekundärerButton
            onClick={() =>
              toggleDropdown(DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN)
            }
            id="filter-button"
          >
            {zimmerAnzahl}
          </Button>
          <Button
            sekundärerButton
            onClick={() =>
              toggleDropdown(DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN)
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
      {preisDropdown ? <PreisDropdown /> : null}
      {bezugsartDropdown ? (
        <AuswahlDropdown>
          {bezugsart === "Mieten" ? "Kaufen" : "Mieten"}
        </AuswahlDropdown>
      ) : null}
      {immobilientypDropdown ? (
        <AuswahlDropdown haus="haus">
          {haustype === "Wohnung" ? "Haus" : "Wohnung"}
        </AuswahlDropdown>
      ) : null}
      {zimmerDropdown ? <ZimmerDropdown /> : null}
      {flächeDropdown ? <FlaecheDropdown /> : null}
      {/************/}
    </Filter>
  </SuchleisteContainer>
);

//Redux

const mapStateToProps = createStructuredSelector({
  //Filter States
  bezugsart: selectBezugsart,
  preis: selectPreis,
  input: selectInput,
  zimmerAnzahl: selectZimmerAnzahl,
  fläche: selectFläche,
  haustype: selectHaustyp,
  //Dropdown States
  preisDropdown: selectPreisDropdown,
  bezugsartDropdown: selectBezugsartDropdown,
  immobilientypDropdown: selectImmobilientypDropdown,
  zimmerDropdown: selectZimmerDropdown,
  flächeDropdown: selectFlächeDropdown
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: toggle => dispatch(toggleDropdown(toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Suchleiste);
