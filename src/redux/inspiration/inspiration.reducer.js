import InspirationsContainerActionType from "./inspiration.types";

//für mehr InspirationsContainer können hier mehrfach state gesetzt werden

const INITIAL_STATE = {
  expand1: false,
  expand2: false,
  expand3: false
};

const inspirationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InspirationsContainerActionType.TOGGLE_EXPAND1:
      return {
        ...state,
        expand1: true
      };
    case InspirationsContainerActionType.TOGGLE_EXPAND2:
      return {
        ...state,
        expand2: true
      };
    case InspirationsContainerActionType.TOGGLE_EXPAND3:
      return {
        ...state,
        expand3: true
      };
    default:
      return state;
  }
};

export default inspirationsReducer;
