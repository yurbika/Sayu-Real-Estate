import InspirationsContainerActionType from "./inspiration.types";

//für mehr InspirationsContainer können hier mehrfach state gesetzt werden

const INITIAL_STATE = {
  expand: false
};

const inspirationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InspirationsContainerActionType.TOGGLE_EXPAND1:
      return {
        ...state,
        expand: !state.expand
      };
    default:
      return state;
  }
};

export default inspirationsReducer;
