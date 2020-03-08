import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Slider from "../../components/slider/slider.component";

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
                      <span className="adresse">
                        {immo[haustyp]["adresse"]["straße"] +
                          ", " +
                          immo[haustyp]["adresse"]["postleitzahl"] +
                          " - " +
                          immo[haustyp]["adresse"]["stadt"] +
                          " - " +
                          immo[haustyp]["adresse"]["bundesland"]}
                      </span>
                      <span className="preis">
                        {" "}
                        {" " +
                          numberWithDots(immo[haustyp]["preis"].toString()) +
                          " €"}
                      </span>
                      <div className="important-infos">
                        <span className="zimmer">
                          {" " + immo[haustyp]["zimmer"]}
                        </span>
                        <span className="wohnfläche">
                          {" " + immo[haustyp]["wohnfläche"]} m²
                        </span>
                        <span className="grundstück">
                          {" " + immo[haustyp]["grundstück"]} m²
                        </span>
                      </div>
                    </div>
                    <div className="infos-footer">
                      <div className="veröffentlichung">
                        {" " +
                          immo[haustyp]["vergangeneTageSeitVeröffentlichung"]}
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
