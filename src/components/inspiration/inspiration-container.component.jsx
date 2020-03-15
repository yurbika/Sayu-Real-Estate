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
  DescriptionContainer
} from "./inspiration.styles";

//as the name says this component is only to give some inspiration to use the searchbar

const InspirationContainer = ({
  children,
  expand,
  toggleExpand,
  toggleExpandButtonNum,
  realEstateArray
}) => (
  <InspirationsContainer>
    <DescriptionContainer>{children}</DescriptionContainer>
    <ImgsPreview expand={expand} realEstateArray={realEstateArray} />
    {expand ? null : (
      <Button actionButton onClick={() => toggleExpand(toggleExpandButtonNum)}>
        Show more
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
