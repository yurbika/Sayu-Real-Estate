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
  BriefDescription,
} from "./img-preview.styles";

const ImgPreview = ({ realEstate, tabIndex }) => {
  let propertyType = "";
  if (!!realEstate["house"]) propertyType = "house";
  else if (!!realEstate["apartment"]) propertyType = "apartment";
  else return null;
  return (
    <ImgPreviewContainer tabIndex={tabIndex}>
      <img
        src={
          realEstate[propertyType]["imgs"]["cover"] +
          theme.unsplash.normalResolution
        }
        alt={propertyType}
      />
      <HoverContainer>
        <BriefDescription tabIndex="0">
          {realEstate[propertyType]["briefDescription"]}
        </BriefDescription>
        <HoverFooter>
          <Rooms tabIndex="0">{realEstate[propertyType]["rooms"]} RMS.</Rooms>
          <Area tabIndex="0">{realEstate[propertyType]["livingspace"]} m²</Area>
          <Price tabIndex="0">
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
