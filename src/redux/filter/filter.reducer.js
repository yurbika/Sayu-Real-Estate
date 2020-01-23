import FilterActionTypes from "./filter.types";

const INITIAL_STATE = {
  input: "",
  bezugsart: "Mieten",
  haustyp: "Wohnung",
  preis: "Preis",
  zimmerAnzahl: "Zimmer",
  fläche: "Fläche"
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.SET_PREIS:
      return {
        ...state,
        preis: action.payload
      };
    case FilterActionTypes.SET_BEZUGSART:
      return {
        ...state,
        bezugsart: action.payload
      };
    case FilterActionTypes.SET_HAUSTYP:
      return {
        ...state,
        haustyp: action.payload
      };
    case FilterActionTypes.SET_FLÄCHE:
      return {
        ...state,
        fläche: action.payload
      };
    case FilterActionTypes.SET_ZIMMERANZAHL:
      return {
        ...state,
        zimmerAnzahl: action.payload
      };
    case FilterActionTypes.SET_INPUT:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
