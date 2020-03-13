import React from "react";

//components
import ImgPreview from "../img-preview/img-preview.component";

//utils
import { ID_GENERATOR } from "../../uniqueKey";

//styles
import ImgsPreviewContainer from "./imgs-container.styles";

const ImgsPreview = ({ realEstateArray, expand }) => (
  <ImgsPreviewContainer expand={expand}>
    {realEstateArray.map(item => (
      <ImgPreview key={ID_GENERATOR("bilder-vorschau-")} realEstate={item} />
    ))}
  </ImgsPreviewContainer>
);

export default ImgsPreview;
