import React from "react";
import "./startseite.styles.scss";

const Startseite = () => (
  <div className="startseite">
    <div className="container-suchleiste">
      <div className="backgroundImage-filter" />
      <div className="startseite-hintergrund" />
      <div className="container-suchleiste-hintergrund">
        <div className="suchleiste-hintergrund">
          <p>Finden Sie Ihre neues Zuhause</p>
          <h1>Bereit zum Umziehen?</h1>
          <input></input>
          <select>
            <option>Wohnung</option>
          </select>
          <select></select>
          <select></select>
          <select></select>
          <select></select>
        </div>
      </div>
    </div>
    <div className="test"></div>
  </div>
);

export default Startseite;
