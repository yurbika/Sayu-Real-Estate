import { createSelector } from "reselect";

const selectPopup = state => state.popup;

export const selectPopupState = createSelector(
  [selectPopup],
  popup => popup.popupShow
);

export const selectPopupImmo = createSelector(
  [selectPopup],
  popup => popup.immo
);

export const selectPopupImmoID = createSelector(
  [selectPopup],
  popup => popup.immoID
);
