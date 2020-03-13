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

const ImgPreview = ({ immo }) => {
  let propertyType = "";
  if (!!immo["haus"]) propertyType = "haus";
  else if (!!immo["wohnung"]) propertyType = "wohnung";
  else return null;
  return (
    <ImgPreviewContainer>
      <img
        src={
          immo[propertyType]["bilder"]["titelbild"] +
          "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
        }
        alt={propertyType}
      />
      <HoverContainer>
        <BriefDescription>
          {immo[propertyType]["kurzeBeschreibung"]}
        </BriefDescription>
        <HoverFooter>
          <Rooms>{immo[propertyType]["zimmer"]} RM.</Rooms>
          <Area> {immo[propertyType]["wohnfläche"]} m²</Area>
          <Price>
            {numberWithDots(immo[propertyType]["preis"].toString())} €
          </Price>
        </HoverFooter>
      </HoverContainer>
    </ImgPreviewContainer>
  );
};

export default ImgPreview;
