import React from "react";
import { connect } from "react-redux";

//component imports
import BilderVorschauContainer from "../bilder-container/bildvorschau-container.component";
import Button from "../button/button.component";

//redux imports
import { toggleExpand } from "../../redux/inspiration-sketion/inspiration.action";

//style import
import "./inspiration.styles.scss";

const InspirationContainer = ({
  children,
  expand,
  toggleExpand,
  toggleExpandButtonNum,
  immoArray
}) => (
  <div className="inspiration-container">
    <div className="beschreibung">{children}</div>
    <BilderVorschauContainer expand={expand} immoArray={immoArray} />
    <Button aktionsButton onClick={() => toggleExpand(toggleExpandButtonNum)}>
      Mehr anzeigen
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleExpand: num => dispatch(toggleExpand(num))
});

export default connect(null, mapDispatchToProps)(InspirationContainer);
