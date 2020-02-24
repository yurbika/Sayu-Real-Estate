import PopupActionTypes from "./popup.types";

const INITIAL_STATE = {
  popupShow: false
};

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
