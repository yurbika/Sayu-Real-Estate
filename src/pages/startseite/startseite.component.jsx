import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import components
import Button from "../../components/button/button.component";
import Suchleiste from "../../components/suchleiste/suchleiste.component";
import InspirationContainer from "../../components/inspiration/inspiration-container.component";

//import funktion
import { toSection } from "../../components/button/button.utils";

//redux imports
import {
  selectExpand1,
  selectExpand2,
  selectExpand3
} from "../../redux/inspiration-sketion/inspiration.selectors";

//import styles
import {
  StartseiteContainer,
  ContainerSuchleiste,
  BackgroundImageFilter,
  StartseiteHintergrund,
  InspirationsSection
} from "./startseite.styles";

const Startseite = ({ expand1, expand2, expand3, ...otherProps }) => (
  <StartseiteContainer>
    <ContainerSuchleiste>
      <BackgroundImageFilter />
      <StartseiteHintergrund />
      <Suchleiste />
      <Button
        scrollButton
        scroll
        onClick={() => toSection("inspirations-section")}
      />
    </ContainerSuchleiste>
    <InspirationsSection id="inspirations-section">
      <InspirationContainer expand={expand1} toggleExpandButtonNum={1}>
        <span className="first">Inspiration</span>
        <span>Luxushäuser</span>
      </InspirationContainer>
      <InspirationContainer expand={expand2} toggleExpandButtonNum={2}>
        <span className="first">Inspiration</span>
        <span>Wohnungen</span>
      </InspirationContainer>
      <InspirationContainer expand={expand3} toggleExpandButtonNum={3}>
        <span className="first">Inspiration</span>
        <span>Klassiker</span>
      </InspirationContainer>
    </InspirationsSection>
  </StartseiteContainer>
);

const mapStateToProps = createStructuredSelector({
  expand1: selectExpand1,
  expand2: selectExpand2,
  expand3: selectExpand3
});

export default connect(mapStateToProps)(Startseite);
