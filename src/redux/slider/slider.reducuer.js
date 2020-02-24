import SliderActionType from "./slider.types";

const INITIAL_STATE = {
  i: 0
};

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SliderActionType.TOGGLE_LEFT:
      return { ...state, i: --state.i };
    case SliderActionType.TOGGLE_RIGHT:
      return { ...state, i: ++state.i };
    default:
      return state;
  }
};

export default sliderReducer;
