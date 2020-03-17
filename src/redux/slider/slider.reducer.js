import SliderActionType from "./slider.types";

const INITIAL_STATE = {
  //size of this array depends on the real-estate component
  sliderPosArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SliderActionType.SET_SLIDER_POSITION:
      return {
        ...state,
        sliderPosArray: state.sliderPosArray.map((item, index) =>
          index === action.payload.id
            ? (state.sliderPosArray[index] = action.payload.num)
            : state.sliderPosArray[index]
        )
      };
    case SliderActionType.RESET_SLIDER_POSITIONS:
      return {
        ...state,
        sliderPosArray: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      };
    case SliderActionType.TOGGLE_LEFT:
      return {
        ...state,
        sliderPosArray: state.sliderPosArray.map((item, index) =>
          index === action.payload
            ? --state.sliderPosArray[index]
            : state.sliderPosArray[index]
        )
      };
    case SliderActionType.TOGGLE_RIGHT:
      return {
        ...state,
        sliderPosArray: state.sliderPosArray.map((item, index) =>
          index === action.payload
            ? ++state.sliderPosArray[index]
            : state.sliderPosArray[index]
        )
      };
    default:
      return state;
  }
};

export default sliderReducer;
