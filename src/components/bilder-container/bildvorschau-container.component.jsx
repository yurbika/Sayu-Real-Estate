import React from "react";

import BildPreview from "../bild-preview/bild-preview.component";

import { ID_GENERATOR } from "../../uniqueKey";

import { BilderVorschau } from "./bildervorschau-container.styles";

const BilderVorschauContainer = ({ immoArray, expand }) => (
  <BilderVorschau expand={expand}>
    {immoArray.map(item => (
      <BildPreview key={ID_GENERATOR("bilder-vorschau-")} immo={item} />
    ))}
  </BilderVorschau>
);

export default BilderVorschauContainer;
