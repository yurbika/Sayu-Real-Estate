import React from "react";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./suchleiste.styles.scss";

const Suchleiste = () => (
  <div className="container-suchleiste-hintergrund">
    <div className="suchleiste-hintergrund">
      <p>Finden Sie Ihre neues Zuhause</p>
      <h1>Bereit zum Umziehen?</h1>

      {/*buttons und inputs der suchleiste*/}
      <div className="input-container">
        <div className="input-container-reihe erste">
          <Input
            inputStartseite
            placeholder="Wo: Ort, Bundesland oder PLZ"
          ></Input>
          <Button normalerButton>Miete</Button>
          <Button normalerButton>Haustyp</Button>
          <Button suchButton>Suchen</Button>
        </div>
        <div className="input-container-reihe">
          <Button sekundärerButton>Preis</Button>
          <Button sekundärerButton>Zimmer</Button>
          <Button sekundärerButton>Fläche</Button>
        </div>
      </div>

      {/************/}
    </div>
  </div>
);

export default Suchleiste;
