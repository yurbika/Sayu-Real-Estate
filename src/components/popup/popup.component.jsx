import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//component imports
import Slider from "../../components/slider/slider.component";
import SliderPreview from "../slider-preview/slider-preview.component";
import PopupMap from "../../components/popup-map/popup-map.component";

//redux imports
import {
  selectPopupImmo,
  selectPopupImmoID
} from "../../redux/popup/popup.selectors";

import { togglePopup } from "../../redux/popup/popup.action";

//utils
import { popupRef } from "../../utils/utils";
import { numberWithDots } from "../input/input.utils";

//styles
import "./popup.styles.scss";
import { CloseButton } from "../suchleiste/suchleiste.styles";

//assets
import moneyIconBrown from "../../assets/money-icon-brown.png";
import gpsIconBrown from "../../assets/gps-icon-brown.png";
import propertyIcon from "../../assets/property-icon.png";
import roomIcon from "../../assets/room-icon.png";
import areaIcon from "../../assets/area-icon.png";
import clockIcon from "../../assets/clock-icon.png";

class Popup extends React.Component {
  render() {
    const { immo, immoID, togglePopup } = this.props;
    let haustyp = "";
    if (!!immo["haus"]) haustyp = "haus";
    else if (!!immo["wohnung"]) haustyp = "wohnung";
    else return null;

    return (
      <div className="popup-container">
        <div className="popup" ref={popupRef}>
          <div
            className="closebutton-container"
            onClick={() => {
              togglePopup();
              document.body.style.overflowY = "visible";
            }}
          >
            <CloseButton />
          </div>
          <div className="side-info">
            <div className="first">
              <div className="rotate-container">
                <span className="rotate">KURZINFORMATION</span>
              </div>
              <div className="kurzinfo">
                <div className="container-bild-info">
                  <div className="popup-bild-preview-container">
                    <Slider
                      imgArray={[
                        immo[haustyp]["bilder"]["titelbild"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                        immo[haustyp]["bilder"]["zweites"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                        immo[haustyp]["bilder"]["drittes"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                        immo[haustyp]["bilder"]["vier"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                        immo[haustyp]["bilder"]["fünf"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                        immo[haustyp]["bilder"]["sechs"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop"
                      ]}
                      alt={haustyp}
                      id={immoID}
                    />
                  </div>
                  <div className="infos">
                    <div className="infos-main">
                      <span className="titel">{immo[haustyp]["titel"]}</span>
                      <div className="icon-container">
                        <img src={gpsIconBrown} alt="Adresse:" />
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
                      <div className="icon-container">
                        <img src={moneyIconBrown} alt="Preis:" />
                        <span className="preis">
                          {" " +
                            numberWithDots(immo[haustyp]["preis"].toString()) +
                            " €"}
                        </span>
                      </div>
                      <div className="side-infos">
                        <div className="icon-container">
                          <img src={roomIcon} alt="Zimmer:" />
                          <span className="zimmer">
                            {" " + immo[haustyp]["zimmer"]}
                          </span>
                        </div>
                        <div className="icon-container">
                          <img src={propertyIcon} alt="Wohnfläche:" />
                          <span className="wohnfläche">
                            {" " + immo[haustyp]["wohnfläche"]} m²
                          </span>
                        </div>
                        {!!immo[haustyp]["grundstück"] ? (
                          <div className="icon-container">
                            <img src={areaIcon} alt="Grundstück:" />
                            <span className="grundstück">
                              {" " + immo[haustyp]["grundstück"]} m²
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="infos-footer">
                      <div className="icon-container">
                        <img src={clockIcon} alt="Veröffentlichung:" />
                        <span className="veröffentlichung">
                          {"veröffentlich vor " +
                            immo[haustyp][
                              "vergangeneTageSeitVeröffentlichung"
                            ] +
                            " Tage"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <SliderPreview
                    imgArray={[
                      immo[haustyp]["bilder"]["titelbild"] +
                        "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                      immo[haustyp]["bilder"]["zweites"] +
                        "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                      immo[haustyp]["bilder"]["drittes"] +
                        "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                      immo[haustyp]["bilder"]["vier"] +
                        "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                      immo[haustyp]["bilder"]["fünf"] +
                        "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop",
                      immo[haustyp]["bilder"]["sechs"] +
                        "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop"
                    ]}
                    alt={haustyp}
                    id={immoID}
                  />
                </div>
              </div>
            </div>
            <div className="second">
              <div className="rotate-container">
                <span className="rotate">VORSCHAU</span>
              </div>
              <div className="main-content-container">
                <div className="main-content">
                  <div className="informations-container">
                    <div className="haus-infos">
                      <div className="abteil">
                        <span>Typ:</span>
                        <span>
                          {haustyp.charAt(0).toUpperCase() + haustyp.slice(1)}
                        </span>
                      </div>
                      <div className="abteil">
                        <span>Zimmer:</span>
                        <span>{immo[haustyp]["zimmer"]}</span>
                      </div>
                      <div className="abteil">
                        <span>Wohnfläche:</span>
                        <span>{immo[haustyp]["wohnfläche"]} m²</span>
                      </div>
                      <div className="abteil">
                        <span>Badezimmer:</span>
                        <span>{immo[haustyp]["badezimmer"]}</span>
                      </div>
                      {haustyp === "haus" ? (
                        <div className="abteil">
                          <span>Grundstück</span>
                          <span>{immo[haustyp]["grundstück"]} m²</span>
                        </div>
                      ) : null}
                      <div className="abteil">
                        <span>Bezugsart:</span>
                        <span>
                          {immo[haustyp]["bezugsart"].charAt(0).toUpperCase() +
                            immo[haustyp]["bezugsart"].slice(1)}
                        </span>
                      </div>
                    </div>
                    {immo[haustyp]["bezugsart"] === "kaufen" ? (
                      <div className="preis-infos">
                        (
                        <table>
                          <tbody>
                            <tr>
                              <td>Preis:</td>
                              <td>
                                {numberWithDots(
                                  immo[haustyp]["preis"].toString()
                                ) + " €"}
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Marklerprovision:</td>
                              <td>
                                {numberWithDots(
                                  Math.floor(
                                    (immo[haustyp]["preis"] * 4.76) / 100
                                  ).toString()
                                ) + " €"}
                              </td>
                              <td>4,76 %</td>
                            </tr>
                            <tr>
                              <td>Notarkosten:</td>
                              <td>
                                {numberWithDots(
                                  Math.floor(
                                    (immo[haustyp]["preis"] / 100) * 1.5
                                  ).toString()
                                ) + " €"}
                              </td>
                              <td>1,50 %</td>
                            </tr>
                            <tr>
                              <td>Grunderwerbsteuer</td>
                              <td>
                                {numberWithDots(
                                  Math.floor(
                                    (immo[haustyp]["preis"] / 100) * 3.5
                                  ).toString()
                                ) + " €"}
                              </td>
                              <td>3,50 %</td>
                            </tr>
                            <tr>
                              <td>Grundbucheintrag</td>
                              <td>
                                {numberWithDots(
                                  Math.floor(
                                    (immo[haustyp]["preis"] / 100) * 0.5
                                  ).toString()
                                ) + " €"}
                              </td>
                              <td>0,50 %</td>
                            </tr>
                          </tbody>
                        </table>
                        )
                      </div>
                    ) : null}
                  </div>
                  <div className="karte">
                    <PopupMap
                      pos={[
                        immo[haustyp]["adresse"]["latitude"],
                        immo[haustyp]["adresse"]["longitude"]
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  immo: selectPopupImmo,
  immoID: selectPopupImmoID
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
