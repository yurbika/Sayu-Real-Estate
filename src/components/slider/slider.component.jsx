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

import "./slider.styles.scss";

const Slider = ({
  imgArray,
  alt,
  toggleLeft,
  toggleRight,
  setSliderPosition,
  curPosArray,
  id,
  ...otherProps
}) => {
  if (curPosArray[id] > imgArray.length - 1)
    setSliderPosition({ num: 0, id: id });
  if (curPosArray[id] < 0)
    setSliderPosition({ num: imgArray.length - 1, id: id });
  return (
    <div className="slider-container">
      <div className="rechter-pfeil-container">
        <div className="rechter-pfeil">
          <Button scrollButton sliderArrow onClick={() => toggleRight(id)} />
        </div>
      </div>
      <div className="linker-pfeil-container">
        <div className="linker-pfeil">
          <Button scrollButton sliderArrow onClick={() => toggleLeft(id)} />
        </div>
      </div>
      <img src={imgArray[curPosArray[id]]} alt={alt} {...otherProps} />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
