import React from "react";

import Button from "../../components/button/button.component";
import Suchleiste from "../../components/suchleiste/suchleiste.component";
import InspirationContainer from "../../components/inspiration/inspiration-container.component";

import {
  StartseiteContainer,
  ContainerSuchleiste,
  BackgroundImageFilter,
  StartseiteHintergrund,
  InspirationsSection
} from "./startseite.styles";

const Startseite = () => (
  <StartseiteContainer>
    <ContainerSuchleiste>
      <BackgroundImageFilter />
      <StartseiteHintergrund />
      <Button scrollButton scroll refTo={"inspirations-section"}></Button>
      <Suchleiste />
    </ContainerSuchleiste>
    <InspirationsSection id="inspirations-section">
      <InspirationContainer num={1}>
        <span className="first">Inspiration</span>
        <span>Luxushäuser</span>
      </InspirationContainer>
      <InspirationContainer num={2}>
        <span className="first">Inspiration</span>
        <span>Wohnungen</span>
      </InspirationContainer>
      <InspirationContainer num={3}>
        <span className="first">Inspiration</span>
        <span>Klassiker</span>
      </InspirationContainer>
    </InspirationsSection>
    <div></div>
  </StartseiteContainer>
);

export default Startseite;
