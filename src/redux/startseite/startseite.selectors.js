import { createSelector } from "reselect";

const selectStartseite = state => state.startseite;

export const selectLuxushäuserArray = createSelector(
  [selectStartseite],
  startseite => startseite.luxushäuserArray
);

export const selectWohnungenArray = createSelector(
  [selectStartseite],
  startseite => startseite.wohnungenArray
);

export const selectKlassikerArray = createSelector(
  [selectStartseite],
  startseite => startseite.klassikerArray
);
