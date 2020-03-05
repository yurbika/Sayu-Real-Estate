import { createSelector } from "reselect";

const selectFilter = state => state.filter;

export const selectSearchInput = createSelector(
  [selectFilter],
  filter => filter.searchInput
);

export const selectMinInput = createSelector(
  [selectFilter],
  filter => filter.minInput
);

export const selectMaxInput = createSelector(
  [selectFilter],
  filter => filter.maxInput
);

export const selectBezugsart = createSelector(
  [selectFilter],
  filter => filter.bezugsart
);

export const selectHaustyp = createSelector(
  [selectFilter],
  filter => filter.haustyp
);

export const selectZimmerAnzahl = createSelector(
  [selectFilter],
  filter => filter.zimmerAnzahl
);

export const selectPreis = createSelector(
  [selectFilter],
  filter => filter.preis
);

export const selectFläche = createSelector(
  [selectFilter],
  filter => filter.fläche
);

export const selectSeite = createSelector(
  [selectFilter],
  filter => filter.seite
);
