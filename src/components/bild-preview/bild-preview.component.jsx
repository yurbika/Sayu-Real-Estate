import React from "react";

import { numberWithDots } from "../input/input.utils";

import {
  BildPreviewContainer,
  HoverContainer,
  HoverFooter,
  Flaeche,
  Zimmer,
  Preis,
  KurzBeschreibung
} from "./bild-preview.styles";

const BildPreview = ({ immo }) => {
  let haustyp = "";
  if (!!immo["haus"]) haustyp = "haus";
  else if (!!immo["wohnung"]) haustyp = "wohnung";
  else return null;
  return (
    <BildPreviewContainer>
      <img
        src={
          immo[haustyp]["bilder"]["titelbild"] +
          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
        }
        alt={haustyp}
      />
      <HoverContainer>
        <KurzBeschreibung>
          {immo[haustyp]["kurzeBeschreibung"]}
        </KurzBeschreibung>
        <HoverFooter>
          <Zimmer>{immo[haustyp]["zimmer"]} Zi.</Zimmer>
          <Flaeche> {immo[haustyp]["wohnfläche"]} qm</Flaeche>
          <Preis>{numberWithDots(immo[haustyp]["preis"].toString())} €</Preis>
        </HoverFooter>
      </HoverContainer>
    </BildPreviewContainer>
  );
};

export default BildPreview;
