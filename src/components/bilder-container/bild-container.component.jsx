import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BildPreview from "../../components/bild-preview/bild-preview.component";

import { ID_GENERATOR } from "../../uniqueKey";

import "./bilder.style.scss";

class BilderVorschauContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

export default connect()(BilderVorschauContainer);
