import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Slider from "../../components/slider/slider.component";

//redux imports
import {
  togglePopup,
  setPopupImmo,
  setPopupImmoID
} from "../../redux/popup/popup.action";

//utils
import { numberWithDots } from "../input/input.utils";

//assets
import moneyIcon from "../../assets/money-icon.png";
import gpsIcon from "../../assets/gps-icon.png";
import propertyIcon from "../../assets/property-icon.png";
import roomIcon from "../../assets/room-icon.png";

import "./immo-preview.styles.scss";

const ImmoPreview = ({
  immo,
  id,
  togglePopup,
  setPopupImmo,
  setPopupImmoID
}) => {
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
          onClick={() => {
            togglePopup();
            setPopupImmo(immo);
            setPopupImmoID(id);
          }}
        />
      </div>
      <div
        className="details"
        onClick={() => {
          togglePopup();
          setPopupImmo(immo);
          setPopupImmoID(id);
        }}
      >
        <div className="beschreibung">
          <span className="titel">{immo[haustyp]["titel"]}</span>
          <span className="untertitel">{immo[haustyp]["untertitel"]}</span>
          <div className="text">{immo[haustyp]["kurzeBeschreibung"]}</div>
        </div>
        <div className="footer">
          <div className="icon-container">
            <img src={gpsIcon} alt="Adresse:" />
            <span className="adresse">
              {" " +
                immo[haustyp]["adresse"]["straße"] +
                ", " +
                immo[haustyp]["adresse"]["postleitzahl"] +
                " - " +
                immo[haustyp]["adresse"]["stadt"] +
                " - " +
                immo[haustyp]["adresse"]["bundesland"]}
            </span>
          </div>
          <div className="footer-second-section">
            <div className="icon-container">
              <img src={roomIcon} alt="Zimmer:" />
              <span className="zimmer">{" " + immo[haustyp]["zimmer"]}</span>
            </div>
            <div className="icon-container">
              <img src={propertyIcon} alt="Wohnfläche:" />
              <span className="wohnfläche">
                {" " + immo[haustyp]["wohnfläche"]} m²
              </span>
            </div>
            <div className="icon-container">
              <img src={moneyIcon} alt="Preis:" />
              <span className="preis">
                {" " + numberWithDots(immo[haustyp]["preis"].toString())}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  setPopupImmo: immo => dispatch(setPopupImmo(immo)),
  setPopupImmoID: num => dispatch(setPopupImmoID(num))
});

export default connect(null, mapDispatchToProps)(ImmoPreview);
