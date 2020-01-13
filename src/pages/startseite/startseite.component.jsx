import React from "react";

import Button from "../../components/button/button.component";
import Suchleiste from "../../components/suchleiste/suchleiste.component";

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
    <InspirationsSection></InspirationsSection>
  </StartseiteContainer>
);

export default Startseite;
