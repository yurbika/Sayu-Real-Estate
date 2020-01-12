import React from "react";

import Button from "../../components/button/button.component";
import Suchleiste from "../../components/suchleiste/suchleiste.component";

import {
  StartseiteContainer,
  ContainerSuchleiste,
  BackgroundImageFilter,
  StartseiteHintergrund,
  Test
} from "./startseite.styles";

const Startseite = () => (
  <StartseiteContainer>
    <ContainerSuchleiste>
      <BackgroundImageFilter />
      <StartseiteHintergrund />
      <Button scrollButton></Button>
      <Suchleiste />
    </ContainerSuchleiste>
    <Test></Test>
  </StartseiteContainer>
);

export default Startseite;
