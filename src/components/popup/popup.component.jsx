import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Slider from "../../components/slider/slider.component";

//redux imports
import {
  selectPopupImmo,
  selectPopupImmoID
} from "../../redux/popup/popup.selectors";

//utils
import { popupRef } from "../../utils/utils";

import "./popup.styles.scss";

class Popup extends React.Component {
  render() {
    const { immo, immoID } = this.props;
    let haustyp = "";
    if (!!immo["haus"]) haustyp = "haus";
    else if (!!immo["wohnung"]) haustyp = "wohnung";
    else return null;

    return (
      <div className="popup-container">
        <div className="popup" ref={popupRef}>
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
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=300&fit=crop",
                        immo[haustyp]["bilder"]["zweites"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=300&fit=crop",
                        immo[haustyp]["bilder"]["drittes"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=300&fit=crop",
                        immo[haustyp]["bilder"]["vier"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=300&fit=crop",
                        immo[haustyp]["bilder"]["fünf"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=300&fit=crop",
                        immo[haustyp]["bilder"]["sechs"] +
                          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=300&fit=crop"
                      ]}
                      alt={haustyp}
                      id={immoID}
                      additionalStyle={"popup-slider"}
                    />
                  </div>
                  <div className="infos">
                    <div className="infos-main">
                      <span className="titel">{immo[haustyp]["titel"]}</span>
                      <span className="adresse"></span>
                      <span className="preis"></span>
                      <div className="important-infos">
                        <span className="zimmer"></span>
                        <span className="wohnfläche"></span>
                        <span className="grundstück"></span>
                      </div>
                    </div>
                    <div className="infos-footer">
                      <div className="veröffentlichung"></div>
                      <div className="anbieter"></div>
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

export default connect(mapStateToProps)(Popup);
