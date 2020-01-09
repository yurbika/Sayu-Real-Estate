import React from "react";
import "./startseite.styles.scss";
import Suchleiste from "../../components/suchleiste/suchleiste.component";

const Startseite = () => (
  <div className="startseite">
    <div className="container-suchleiste">
      <div className="backgroundImage-filter" />
      <div className="startseite-hintergrund" />
      <Suchleiste />
    </div>
    <div className="test"></div>
  </div>
);

export default Startseite;
