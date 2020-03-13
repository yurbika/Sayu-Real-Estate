import React from "react";

//utils
import { numberWithDots } from "../input/input.utils";

//styles
import {
  ImgPreviewContainer,
  HoverContainer,
  HoverFooter,
  Area,
  Rooms,
  Price,
  BriefDescription
} from "./img-preview.styles";

const ImgPreview = ({ realEstate }) => {
  let propertyType = "";
  if (!!realEstate["haus"]) propertyType = "haus";
  else if (!!realEstate["wohnung"]) propertyType = "wohnung";
  else return null;
  return (
    <ImgPreviewContainer>
      <img
        src={
          realEstate[propertyType]["bilder"]["titelbild"] +
          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
        }
        alt={propertyType}
      />
      <HoverContainer>
        <BriefDescription>
          {realEstate[propertyType]["kurzeBeschreibung"]}
        </BriefDescription>
        <HoverFooter>
          <Rooms>{realEstate[propertyType]["zimmer"]} RM.</Rooms>
          <Area> {realEstate[propertyType]["wohnfläche"]} m²</Area>
          <Price>
            {numberWithDots(realEstate[propertyType]["preis"].toString())} €
          </Price>
        </HoverFooter>
      </HoverContainer>
    </ImgPreviewContainer>
  );
};

export default ImgPreview;
