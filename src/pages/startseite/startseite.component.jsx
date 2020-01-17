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
      <Button scrollButton></Button>
      <Suchleiste />
    </ContainerSuchleiste>
    <InspirationsSection>
      <InspirationContainer num={1}>
        <span className="first">Inspiration</span>
        <span>Luxushäuser</span>
      </InspirationContainer>
      <InspirationContainer num={3}>
        <span className="first">Inspiration</span>
        <span>Lea stinkt</span>
      </InspirationContainer>
    </InspirationsSection>
  </StartseiteContainer>
);

export default Startseite;
