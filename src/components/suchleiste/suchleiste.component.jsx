import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import {
  selectBezugsart,
  selectHaustyp,
  selectInput,
  selectZimmerAnzahl,
  selectPreis,
  selectFläche
} from "../../redux/filter/filter.selectors";

import {
  SuchleisteContainer,
  SuchleisteHintergrund,
  InputContainer,
  InputContainerZeile
} from "./suchleiste.styles";

const Suchleiste = ({ bezugsart, preis, zimmerAnzahl, haustype, fläche }) => (
  <SuchleisteContainer>
    <SuchleisteHintergrund>
      <p>Finden Sie Ihre neues Zuhause</p>
      <h1>Bereit zum Umziehen?</h1>

      {/*buttons und inputs der suchleiste*/}
      <InputContainer>
        <InputContainerZeile>
          <Input
            inputStartseite
            type="search"
            placeholder="Wo: Ort, Bundesland oder PLZ"
          />
          <Button normalerButton>{bezugsart}</Button>
          <Button normalerButton>{haustype}</Button>
          <Button suchButton>Suchen</Button>
        </InputContainerZeile>
        <InputContainerZeile>
          <Button sekundärerButton>{preis}</Button>
          <Button sekundärerButton>{zimmerAnzahl}</Button>
          <Button sekundärerButton>{fläche}</Button>
        </InputContainerZeile>
      </InputContainer>

      {/************/}
    </SuchleisteHintergrund>
  </SuchleisteContainer>
);

const mapStateToProps = createStructuredSelector({
  bezugsart: selectBezugsart,
  preis: selectPreis,
  input: selectInput,
  zimmerAnzahl: selectZimmerAnzahl,
  fläche: selectFläche,
  haustype: selectHaustyp
});

export default connect(mapStateToProps)(Suchleiste);
