import React from "react";

import Slider from "../../components/slider/slider.component";

//utils
import { numberWithDots } from "../input/input.utils";

import "./immo-preview.styles.scss";

const ImmoPreview = ({ immo, id }) => {
  let haustyp = "";
  if (!!immo["haus"]) haustyp = "haus";
  else if (!!immo["wohnung"]) haustyp = "wohnung";
  else return null;
  return (
    <div className="container">
      <div className="bild-preview-container">
        <Slider
          imgArray={[
            immo[haustyp]["bilder"]["titelbild"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=360&h=270&fit=crop",
            immo[haustyp]["bilder"]["zweites"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=360&h=270&fit=crop",
            immo[haustyp]["bilder"]["drittes"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=360&h=270&fit=crop",
            immo[haustyp]["bilder"]["vier"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=360&h=270&fit=crop",
            immo[haustyp]["bilder"]["fünf"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=360&h=270&fit=crop",
            immo[haustyp]["bilder"]["sechs"] +
              "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=360&h=270&fit=crop"
          ]}
          alt={haustyp}
          id={id}
        />
      </div>
      <div className="details">
        <div className="beschreibung">
          <span className="titel">{immo[haustyp]["titel"]}</span>
          <span className="untertitel">{immo[haustyp]["untertitel"]}</span>
          <div className="text">{immo[haustyp]["kurzeBeschreibung"]}</div>
        </div>
        <div className="footer">
          <span className="adresse">
            {immo[haustyp]["adresse"]["straße"] +
              ", " +
              immo[haustyp]["adresse"]["postleitzahl"] +
              " - " +
              immo[haustyp]["adresse"]["stadt"] +
              " - " +
              immo[haustyp]["adresse"]["bundesland"]}
          </span>
          <span className="zimmer">{immo[haustyp]["zimmer"]}</span>
          <span className="wohnfläche">{immo[haustyp]["wohnfläche"]} m²</span>
          <span className="preis">
            {numberWithDots(immo[haustyp]["preis"].toString())} €
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImmoPreview;
