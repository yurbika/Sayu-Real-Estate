import React from "react";

import BildPreview from "../../components/bild-preview/bild-preview.component";

import { ID_GENERATOR } from "../../uniqueKey";

//import IMMO_DATA from "../../immo.data";

import "./bilder.style.scss";

class BilderVorschauContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //immoData: IMMO_DATA
      expand: props.expand,
      items: ["", "", "", "", "", "", "", "", "", "", "", ""]
    };
  }

  render() {
    return (
      <div className={"bilder-vorschau" + (this.props.expand ? " big" : "")}>
        {this.state.items
          .filter((item, idx) => idx < 12)
          .map(item => (
            <BildPreview key={ID_GENERATOR("bilder-vorschau-")} />
          ))}
      </div>
    );
  }
}

export default BilderVorschauContainer;
