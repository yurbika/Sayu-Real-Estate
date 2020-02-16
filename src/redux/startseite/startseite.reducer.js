import StartseiteActionTypes from "./startseite.types";

const INITIAL_STATE = {
  luxushäuserArray: [],
  wohnungenArray: [],
  klassikerArray: []
};

const startseitenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StartseiteActionTypes.SET_LUXUSHÄUSER_ARRAY:
      return {
        ...state,
        luxushäuserArray: action.payload
      };
    case StartseiteActionTypes.SET_KLASSIKER_ARRAY:
      return {
        ...state,
        klassikerArray: action.payload
      };
    case StartseiteActionTypes.SET_WOHNUNGEN_ARRAY:
      return {
        ...state,
        wohnungenArray: action.payload
      };
    default:
      return state;
  }
};

export default startseitenReducer;
