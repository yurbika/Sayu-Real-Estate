import React from "react";

import BildPreview from "../../components/bild-preview/bild-preview.component";

//import IMMO_DATA from "../../immo.data";

import "./bilder.style.scss";

class BilderVorschauContainer extends React.Component {
  constructor(props) {
    console.log("hi");
    super(props);
    this.state = {
      //immoData: IMMO_DATA
      expand: props.expand
    };
  }

  render() {
    return (
      <div className={"bilder-vorschau" + (this.props.expand ? " big" : "")}>
        <BildPreview />
      </div>
    );
  }
}

export default BilderVorschauContainer;
