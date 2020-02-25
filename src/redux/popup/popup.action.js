import PopupActionTypes from "./popup.types";

export const togglePopup = () => ({
  type: PopupActionTypes.TOGGLE_POPUP
});

export const setPopupImmo = immo => ({
  type: PopupActionTypes.SET_IMMO,
  payload: immo
});
