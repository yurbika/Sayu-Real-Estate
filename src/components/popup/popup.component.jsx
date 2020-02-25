import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux imports
import { selectPopupImmo } from "../../redux/popup/popup.selectors";

//utils
import { popupRef } from "../../utils/utils";

import "./popup.styles.scss";

class Popup extends React.Component {
  render() {
    const { immo } = this.props;
    return (
      <div className="popup-container">
        <div className="popup" ref={popupRef}></div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  immo: selectPopupImmo
});

export default connect(mapStateToProps)(Popup);
