import React from "react";

import BildPreview from "../../components/bild-preview/bild-preview.component";

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
          .map(itme => (
            <BildPreview key={itme + Math.floor(Math.random() * 1000000)} />
          ))}
      </div>
    );
  }
}

export default BilderVorschauContainer;
