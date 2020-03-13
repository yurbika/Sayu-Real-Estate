import React from "react";

//components
import ImgPreview from "../img-preview/img-preview.component";

//utils
import { ID_GENERATOR } from "../../uniqueKey";

//styles
import { BilderVorschau } from "./bildervorschau-container.styles";

const BilderVorschauContainer = ({ immoArray, expand }) => (
  <BilderVorschau expand={expand}>
    {immoArray.map(item => (
      <ImgPreview key={ID_GENERATOR("bilder-vorschau-")} immo={item} />
    ))}
  </BilderVorschau>
);

export default BilderVorschauContainer;
