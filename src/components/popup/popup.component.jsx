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
            id={immoID}
          />
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
