import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux imports
import { selectPopupImmo } from "../../redux/popup/popup.selectors";

import "./popup.styles.scss";

class Popup extends React.Component {
  render() {
    const { immo } = this.props;
    return (
      <div className="popup-container">
        <div className="popup"></div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  immo: selectPopupImmo
});

export default connect(mapStateToProps)(Popup);
