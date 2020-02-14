import React from "react";

import BildPreview from "../bild-preview/bild-preview.component";

import { ID_GENERATOR } from "../../uniqueKey";

import "./bilder.style.scss";

const BilderVorschauContainer = ({ immoArray, expand }) => (
  <div className={"bilder-vorschau" + (expand ? " big" : "")}>
    {immoArray.map(item => (
      <BildPreview key={ID_GENERATOR("bilder-vorschau-")} immo={item} />
    ))}
  </div>
);

export default BilderVorschauContainer;
