import PopupActionTypes from "./popup.types";

export const togglePopup = () => ({
  type: PopupActionTypes.TOGGLE_POPUP
});

export const setPopupRealEstate = realEstate => ({
  type: PopupActionTypes.SET_REALESTATE,
  payload: realEstate
});

export const setPopupRealEstateID = num => ({
  type: PopupActionTypes.SET_REALESTATE_ID,
  payload: num
});
