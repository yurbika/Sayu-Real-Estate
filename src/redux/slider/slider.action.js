import SliderActionType from "./slider.types";

export const setSliderPosition = num => ({
  type: SliderActionType.SET_SLIDER_POSITION,
  payload: num
});

export const toggleLeft = () => ({
  type: SliderActionType.TOGGLE_LEFT
});

export const toggleRight = () => ({
  type: SliderActionType.TOGGLE_RIGHT
});
