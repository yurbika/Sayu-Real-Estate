import { createSelector } from "reselect";

const selectPopup = state => state.popup;

export const selectPopupState = createSelector(
  [selectPopup],
  popup => popup.popupShow
);

export const selectPopupRealEstate = createSelector(
  [selectPopup],
  popup => popup.realEstate
);

export const selectPopupRealEstateID = createSelector(
  [selectPopup],
  popup => popup.realEstateID
);
