import React from "react";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./suchleiste.styles.scss";

const Suchleiste = () => (
  <div className="container-suchleiste-hintergrund">
    <div className="suchleiste-hintergrund">
      <p>Finden Sie Ihre neues Zuhause</p>
      <h1>Bereit zum Umziehen?</h1>
      <div className="input-container">
        <div className="input-container-reihe">
          <Input placeholder={"Ort"} />
          <Button>Mieten</Button>
          <Button>Haustyp</Button>
        </div>
        <div className="input-container-reihe">
          <Button>Preis</Button>
          <Button>Zimmer</Button>
          <Button>Fläche</Button>
        </div>
        <Button className="suchen">Suchen</Button>
      </div>
    </div>
  </div>
);

export default Suchleiste;
