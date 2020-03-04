import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//component imports
import BilderVorschauContainer from "../bilder-container/bildvorschau-container.component";
import Button from "../button/button.component";

//redux imports
import { toggleExpand } from "../../redux/inspiration-sketion/inspiration.action";

//style import
import {
  InspirationsContainer,
  BeschreibungsContainer
} from "./inspiration.styles";

//dient nur dazu dem nutzer eine vorstellung zu geben wo nach der nutzer suchen könnte

const InspirationContainer = ({
  children,
  expand,
  toggleExpand,
  toggleExpandButtonNum,
  immoArray,
  history
}) => (
  <InspirationsContainer>
    <BeschreibungsContainer>{children}</BeschreibungsContainer>
    <BilderVorschauContainer expand={expand} immoArray={immoArray} />
    {expand ? null : (
      <Button
        aktionsButton
        onClick={() => {
          toggleExpand(toggleExpandButtonNum);
          if (expand) {
            history.push("/liste");
          }
        }}
      >
        Mehr anzeigen
      </Button>
    )}
  </InspirationsContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleExpand: num => dispatch(toggleExpand(num))
});

export default withRouter(
  connect(null, mapDispatchToProps)(InspirationContainer)
);
