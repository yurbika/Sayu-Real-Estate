import FilterActionTypes from "./filter.types";

const INITIAL_STATE = {
  searchInput: "",
  minInput: "",
  maxInput: "",
  bezugsart: "Mieten",
  haustyp: "Wohnung",
  preis: "Preis",
  zimmerAnzahl: "Zimmer ab",
  fläche: "Fläche ab",
  suchButtonClick: false,
  seite: 1
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
    case FilterActionTypes.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload
      };
    case FilterActionTypes.SET_MINIMUM_INPUT:
      return {
        ...state,
        minInput: action.payload
      };
    case FilterActionTypes.SET_MAXIMAL_INPUT:
      return {
        ...state,
        maxInput: action.payload
      };
    case FilterActionTypes.SET_SEITE:
      return { ...state, seite: action.payload };
    case FilterActionTypes.RESET_PAGE:
      return { ...state, seite: 1 };
    case FilterActionTypes.TOGGLE_SUCHBUTTON:
      return {
        ...state,
        suchButtonClick: !state.suchButtonClick
      };
    default:
      return state;
  }
};

export default filterReducer;
