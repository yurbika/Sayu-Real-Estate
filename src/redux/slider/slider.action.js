import SliderActionType from "./slider.types";

export const setSliderPosition = ({ num, id }) => ({
  type: SliderActionType.SET_SLIDER_POSITION,
  payload: { num: num, id: id }
});

export const resetSliderPositions = () => ({
  type: SliderActionType.RESET_SLIDER_POSITIONS
});

export const toggleLeft = sliderID => ({
  type: SliderActionType.TOGGLE_LEFT,
  payload: sliderID
});

export const toggleRight = sliderID => ({
  type: SliderActionType.TOGGLE_RIGHT,
  payload: sliderID
});
