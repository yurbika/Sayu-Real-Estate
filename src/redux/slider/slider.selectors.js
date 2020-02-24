import { createSelector } from "reselect";

export const selectSlider = state => state.slider;

export const selectCurrentPositionArray = createSelector(
  [selectSlider],
  slider => slider.sliderPosArray
);
