import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//component imports
import ImgsPreview from "../imgs-container/imgs-container.component";
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
  realEstateArray,
  history
}) => (
  <InspirationsContainer>
    <BeschreibungsContainer>{children}</BeschreibungsContainer>
    <ImgsPreview expand={expand} realEstateArray={realEstateArray} />
    {expand ? null : (
      <Button aktionsButton onClick={() => toggleExpand(toggleExpandButtonNum)}>
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
