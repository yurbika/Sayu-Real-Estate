import React from "react";

//utils
import { thousandSeperatorDots } from "../input/input.utils";
import theme from "../../utils/theme";

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
  if (!!realEstate["house"]) propertyType = "house";
  else if (!!realEstate["apartment"]) propertyType = "apartment";
  else return null;
  return (
    <ImgPreviewContainer>
      <img
        src={
          realEstate[propertyType]["imgs"]["cover"] +
          theme.unsplash.normalResolution
        }
        alt={propertyType}
      />
      <HoverContainer>
        <BriefDescription>
          {realEstate[propertyType]["briefDescription"]}
        </BriefDescription>
        <HoverFooter>
          <Rooms>{realEstate[propertyType]["rooms"]} RMS.</Rooms>
          <Area> {realEstate[propertyType]["livingspace"]} m²</Area>
          <Price>
            {thousandSeperatorDots(
              realEstate[propertyType]["price"].toString()
            )}
            €
          </Price>
        </HoverFooter>
      </HoverContainer>
    </ImgPreviewContainer>
  );
};

export default ImgPreview;
