import React from "react";

import { numberWithDots } from "../input/input.utils";

import "./bild-preview.styles.scss";

const BildPreview = ({ immo }) => {
  console.log(immo);
  let haustyp = "";
  if (!!immo["haus"]) haustyp = "haus";
  else if (!!immo["wohnung"]) haustyp = "wohnung";
  else return null;
  return (
    <div className="bild-preview-container">
      <img src={immo[haustyp]["bilder"]["titelbild"]} alt={haustyp} />
      <div className="hover-container">
        <span className="kurze-beschreibung">
          {immo[haustyp]["kurzeBeschreibung"]}
        </span>
        <div className="hover-footer">
          <span className="zimmer">{immo[haustyp]["zimmer"]} Zi.</span>
          <span className="fläche"> {immo[haustyp]["wohnfläche"]} qm</span>
          <span className="preis">
            {" "}
            {numberWithDots(immo[haustyp]["preis"].toString())} €
          </span>
        </div>
      </div>
    </div>
  );
};

export default BildPreview;
