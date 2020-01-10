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
            className="input-startseite"
            placeholder="Wo: Ort, Bundesland oder PLZ"
          ></Input>
          <Button className="normaler-button">Miete</Button>
          <Button className="normaler-button">Haustyp</Button>
          <Button className="such-button" arrow="no-arrow">
            Suchen
          </Button>
        </div>
        <div className="input-container-reihe">
          <Button className="secondary-button">Preis</Button>
          <Button className="secondary-button">Zimmer</Button>
          <Button className="secondary-button">Fläche</Button>
        </div>
      </div>

      {/************/}
    </div>
  </div>
);

export default Suchleiste;
