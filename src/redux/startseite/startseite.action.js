import StartseiteActionTypes from "./startseite.types";

export const setLuxushäuserArray = array => ({
  type: StartseiteActionTypes.SET_LUXUSHÄUSER_ARRAY,
  payload: array
});

export const setWohnungenArray = array => ({
  type: StartseiteActionTypes.SET_WOHNUNGEN_ARRAY,
  payload: array
});

export const setKlassikerArray = array => ({
  type: StartseiteActionTypes.SET_KLASSIKER_ARRAY,
  payload: array
});
