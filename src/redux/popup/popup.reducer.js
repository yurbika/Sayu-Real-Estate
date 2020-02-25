import PopupActionTypes from "./popup.types";

const INITIAL_STATE = {
  popupShow: false,
  immo: null,
  immoID: null
};

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopupActionTypes.SET_IMMO_ID:
      return {
        ...state,
        immoID: action.payload
      };
    case PopupActionTypes.SET_IMMO:
      return {
        ...state,
        immo: action.payload
      };
    case PopupActionTypes.TOGGLE_POPUP:
      return {
        ...state,
        popupShow: !state.popupShow
      };
    default:
      return state;
  }
};

export default popupReducer;
