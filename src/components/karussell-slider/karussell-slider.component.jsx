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

//styles
import "./karussell-slider.styles.scss";

const KarussellSlider = ({
  imgArray,
  id,
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
    <div className="slider-container">
      <div className="content-container">
        {imgArray.map((item, index) => (
          <div className="img-container">
            <div
              className={
                "overlay " + (index === curPosArray[id] ? "hidden" : "")
              }
            />
            <img
              src={imgArray[index]}
              alt={"haus"}
              className={index === curPosArray[id] ? "active" : ""}
              onClick={() => setSliderPosition({ num: index, id: id })}
            />
          </div>
        ))}
        <div className="rechterpfeil">
          <Button scrollButton sliderArrow onClick={() => toggleRight(id)} />
        </div>
        <div className="linkerpfeil">
          <Button scrollButton sliderArrow onClick={() => toggleLeft(id)} />
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(KarussellSlider);
