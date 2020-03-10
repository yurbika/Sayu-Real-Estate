import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../button/button.component";

import "./karussell-slider.styles.scss";

const KarussellSlider = ({ imgArray }) => {
  return (
    <div className="slider-container">
      <div className="content-container">
        <div className="rechterpfeil">
          <Button
            scrollButton
            sliderArrow
            onClick={() => console.log("rechts")}
          />
        </div>
        {imgArray.map((item, index) => (
          <img src={imgArray[index]} alt={"haus"} />
        ))}
        <div className="linkerpfeil">
          <Button
            scrollButton
            sliderArrow
            onClick={() => console.log("links")}
          />
        </div>
      </div>
    </div>
  );
};

export default KarussellSlider;
