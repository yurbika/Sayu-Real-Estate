import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Slider from "../../components/slider/slider.component";
import KarussellSlider from "../../components/karussell-slider/karussell-slider.component";

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
                  <KarussellSlider
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
                </div>
              </div>
            </div>
            <div className="second">
              <div className="rotate-container">
                <span className="rotate">VORSCHAU</span>
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
