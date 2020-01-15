import React from "react";

import "./bilder-preview.styles.scss";

const BildPreview = () => (
  <div className="bild">
    <div className="hover-beschreibung">
      <span className="text"></span>
      <div className="hover-footer">
        <span className="zimmer"></span>
        <span className="fläche"></span>
        <span className="preis"></span>
      </div>
    </div>
  </div>
);

export default BildPreview;
