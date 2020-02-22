import { createSelector } from "reselect";

const selectSlider = state => state.slider;

export const selectCurrentPosition = createSelector(
  [selectSlider],
  slider => slider.i
);
