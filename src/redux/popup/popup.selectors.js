import { createSelector } from "reselect";

const selectPopup = state => state.popup;

export const selectPopupState = createSelector(
  [selectPopup],
  popup => popup.popupShow
);
