import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../button/button.component";

//redux imports
import { selectCurrentPosition } from "../../redux/slider/slider.selectors";
import {
  setSliderPosition,
  toggleLeft,
  toggleRight
} from "../../redux/slider/slider.action";

import "./slider.styles.scss";

const Slider = ({ imgArray, alt, toggleLeft, toggleRight, curPos }) => {
  return (
    <div className="slider-container">
      <div className="rechter-pfeil-container">
        <div className="rechter-pfeil">
          <Button scrollButton sliderArrow onClick={() => toggleRight()} />
        </div>
      </div>
      <div className="linker-pfeil-container">
        <div className="linker-pfeil">
          <Button scrollButton sliderArrow onClick={() => toggleLeft()} />
        </div>
      </div>
      <img src={imgArray[curPos]} alt={alt} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  curPos: selectCurrentPosition
});
const mapDispatchToProps = dispatch => ({
  setSliderPosition: num => dispatch(setSliderPosition(num)),
  toggleLeft: () => dispatch(toggleLeft()),
  toggleRight: () => dispatch(toggleRight())
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
