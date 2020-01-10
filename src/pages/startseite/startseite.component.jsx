import React from "react";

import Button from "../../components/button/button.component";

import "./startseite.styles.scss";
import Suchleiste from "../../components/suchleiste/suchleiste.component";

const Startseite = () => (
  <div className="startseite">
    <div className="container-suchleiste">
      <div className="backgroundImage-filter" />
      <div className="startseite-hintergrund" />
      <Button className="scroll-button"></Button>
      <Suchleiste />
    </div>
    <div className="test"></div>
  </div>
);

export default Startseite;
