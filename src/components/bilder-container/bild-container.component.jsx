import React from "react";

import BildPreview from "../../components/bild-preview/bild-preview.component";

//import IMMO_DATA from "../../immo.data";

import "./bilder.style.scss";

class BilderVorschauContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //immoData: IMMO_DATA
      //expanded
    };
  }
  render() {
    return (
      <div className="bilder-vorschau">
        <BildPreview />
      </div>
    );
  }
}

export default BilderVorschauContainer;
