import React from "react";

//import components
import Button from "../../components/button/button.component";
import Suchleiste from "../../components/suchleiste/suchleiste.component";
import InspirationContainer from "../../components/inspiration/inspiration-container.component";

//import funktion
import { toSection } from "../../components/button/button.utils";

//import styles
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
      <Suchleiste />
      <Button
        scrollButton
        scroll
        onClick={() => toSection("inspirations-section")}
      />
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
  </StartseiteContainer>
);

export default Startseite;
