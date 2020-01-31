import React from "react";
import { connect } from "react-redux";

import BilderVorschauContainer from "../bilder-container/bild-container.component";
import Button from "../button/button.component";

import { toggleExpand } from "../../redux/inspiration-sketion/inspiration.action";

import "./inspiration.styles.scss";

//expand ist ein state es müssen alle eingebunden werden damit entschieden werden kann welcher gebraucht wird
//hier noch ein funktion schreiben damit es sauberer aussieht utils

const InspirationContainer = ({
  children,
  expand1,
  expand2,
  expand3,
  num,
  toggleExpand
}) => (
  <div
    className={
      "inspiration-container " +
      ((num === 1
      ? expand1
      : num === 2
      ? expand2
      : num === 3
      ? expand3
      : null)
        ? "big"
        : "")
    }
  >
    <div className="beschreibung">{children}</div>

    <BilderVorschauContainer
      expand={
        num === 1 ? expand1 : num === 2 ? expand2 : num === 3 ? expand3 : null
      }
    />

    <Button aktionsButton onClick={() => toggleExpand(num)}>
      Mehr anzeigen
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleExpand: num => dispatch(toggleExpand(num))
});

const mapStateToProps = ({
  inspirationsSketion: { expand1, expand2, expand3 }
}) => ({
  expand1,
  expand2,
  expand3
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationContainer);
