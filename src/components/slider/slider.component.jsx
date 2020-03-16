import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../button/button.component";
import Spinner from "../spinner/spinner.component";

//redux imports
import { selectCurrentPositionArray } from "../../redux/slider/slider.selectors";
import {
  setSliderPosition,
  toggleLeft,
  toggleRight
} from "../../redux/slider/slider.action";

//styles
import {
  SliderContainer,
  ArrowContainer,
  LeftArrowContainer,
  RightArrowContainer
} from "./slider.styles";

class Slider extends React.Component {
  state = { isLoading: true };

  render() {
    const {
      imgArray,
      alt,
      toggleLeft,
      toggleRight,
      setSliderPosition,
      curPosArray,
      id,
      additionalStyle,
      ...otherProps
    } = this.props;
    if (curPosArray[id] > imgArray.length - 1)
      setSliderPosition({ num: 0, id: id });
    if (curPosArray[id] < 0)
      setSliderPosition({ num: imgArray.length - 1, id: id });
    const style = this.state.isLoading ? { display: "none" } : {};
    return (
      <SliderContainer>
        {this.state.isLoading ? <Spinner /> : null}
        <SliderContainer style={style}>
          <ArrowContainer>
            <RightArrowContainer>
              <Button scrollButton sliderArrow onClick={() => toggleLeft(id)} />
            </RightArrowContainer>
            <LeftArrowContainer>
              <Button
                scrollButton
                sliderArrow
                onClick={() => toggleRight(id)}
              />
            </LeftArrowContainer>
          </ArrowContainer>
          <img
            src={imgArray[curPosArray[id]]}
            alt={alt}
            onLoad={() => this.setState({ isLoading: false })}
            {...otherProps}
          />
        </SliderContainer>
      </SliderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  curPosArray: selectCurrentPositionArray
});

const mapDispatchToProps = dispatch => ({
  setSliderPosition: num => dispatch(setSliderPosition(num)),
  toggleLeft: num => dispatch(toggleLeft(num)),
  toggleRight: num => dispatch(toggleRight(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
