import React from "react";

const BilderVorschauContainer = ({ items }) => (
  <div className="bilder-vorschau">
    {items.map(item => (
      <div className="bild">
        <div className="hover-beschreibung">
          <span className="text">{item.beschreibung}</span>
          <div className="hover-footer">
            <span className="zimmer"></span>
            <span className="fläche"></span>
            <span className="preis"></span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BilderVorschauContainer;
