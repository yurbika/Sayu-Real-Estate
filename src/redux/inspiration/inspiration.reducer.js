import InspirationActionType from "./inspiration.types";

const INITIAL_STATE = {
  expand1: false,
  expand2: false,
  expand3: false
};

const inspirationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InspirationActionType.TOGGLE_EXPAND1:
      return {
        ...state,
        expand1: true
      };
    case InspirationActionType.TOGGLE_EXPAND2:
      return {
        ...state,
        expand2: true
      };
    case InspirationActionType.TOGGLE_EXPAND3:
      return {
        ...state,
        expand3: true
      };
    default:
      return state;
  }
};

export default inspirationReducer;
