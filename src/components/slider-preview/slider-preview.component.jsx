import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../button/button.component";

//redux imports
import { selectCurrentPositionArray } from "../../redux/slider/slider.selectors";
import {
  setSliderPosition,
  toggleLeft,
  toggleRight
} from "../../redux/slider/slider.action";

//utils
import { ID_GENERATOR } from "../../uniqueKey.js";

//styles
import {
  SliderPreviewContainer,
  Container,
  ImgContainer,
  Overlay,
  RightArrow,
  LeftArrow
} from "./slider-preview.styles";

const SliderPreview = ({
  imgArray,
  id,
  haustyp,
  curPosArray,
  toggleLeft,
  toggleRight,
  setSliderPosition
}) => {
  if (curPosArray[id] > imgArray.length - 1)
    setSliderPosition({ num: 0, id: id });
  if (curPosArray[id] < 0)
    setSliderPosition({ num: imgArray.length - 1, id: id });
  return (
    <SliderPreviewContainer>
      <Container>
        {imgArray.map((item, index) => (
          <ImgContainer key={ID_GENERATOR("slider-preview-")}>
            <Overlay hidden={index === curPosArray[id] ? true : false} />
            <img
              src={imgArray[index]}
              alt={haustyp}
              className={index === curPosArray[id] ? "active" : ""}
              onClick={() => setSliderPosition({ num: index, id: id })}
            />
          </ImgContainer>
        ))}
        <RightArrow>
          <Button scrollButton sliderArrow onClick={() => toggleRight(id)} />
        </RightArrow>
        <LeftArrow>
          <Button scrollButton sliderArrow onClick={() => toggleLeft(id)} />
        </LeftArrow>
      </Container>
    </SliderPreviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  curPosArray: selectCurrentPositionArray
});

const mapDispatchToProps = dispatch => ({
  setSliderPosition: num => dispatch(setSliderPosition(num)),
  toggleLeft: num => dispatch(toggleLeft(num)),
  toggleRight: num => dispatch(toggleRight(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderPreview);
