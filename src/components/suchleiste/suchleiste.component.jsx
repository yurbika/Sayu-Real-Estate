import React from "react";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import {
  SuchleisteContainer,
  SuchleisteHintergrund,
  InputContainer,
  InputContainerZeile
} from "./suchleiste.styles";

const Suchleiste = () => (
  <SuchleisteContainer>
    <SuchleisteHintergrund>
      <p>Finden Sie Ihre neues Zuhause</p>
      <h1>Bereit zum Umziehen?</h1>

      {/*buttons und inputs der suchleiste*/}
      <InputContainer>
        <InputContainerZeile>
          <Input
            inputStartseite
            placeholder="Wo: Ort, Bundesland oder PLZ"
          ></Input>
          <Button normalerButton>Miete</Button>
          <Button normalerButton>Haustyp</Button>
          <Button suchButton>Suchen</Button>
        </InputContainerZeile>
        <InputContainerZeile>
          <Button sekundärerButton>Preis</Button>
          <Button sekundärerButton>Zimmer</Button>
          <Button sekundärerButton>Fläche</Button>
        </InputContainerZeile>
      </InputContainer>

      {/************/}
    </SuchleisteHintergrund>
  </SuchleisteContainer>
);

export default Suchleiste;
