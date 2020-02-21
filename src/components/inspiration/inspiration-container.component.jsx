import React from "react";
import { connect } from "react-redux";

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

const InspirationContainer = ({
  children,
  expand,
  toggleExpand,
  toggleExpandButtonNum,
  immoArray
}) => (
  <InspirationsContainer>
    <BeschreibungsContainer>{children}</BeschreibungsContainer>
    <BilderVorschauContainer expand={expand} immoArray={immoArray} />
    <Button aktionsButton onClick={() => toggleExpand(toggleExpandButtonNum)}>
      {expand ? "Alle anzeigen" : "Mehr anzeigen"}
    </Button>
  </InspirationsContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleExpand: num => dispatch(toggleExpand(num))
});

export default connect(null, mapDispatchToProps)(InspirationContainer);
