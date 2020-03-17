import PopupActionTypes from "./popup.types";

const INITIAL_STATE = {
  popupShow: false,
  realEstate: null,
  realEstateID: null
};

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopupActionTypes.SET_REALESTATE_ID:
      return {
        ...state,
        realEstateID: action.payload
      };
    case PopupActionTypes.SET_REALESTATE:
      return {
        ...state,
        realEstate: action.payload
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
