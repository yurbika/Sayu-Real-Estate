import FilterActionTypes from "./filter.types";

const INITIAL_STATE = {
  searchInput: "",
  minInput: "",
  maxInput: "",
  obtainingType: "Rent",
  realEstateType: "Apartment",
  price: "Price",
  rooms: "Rooms",
  space: "Space",
  searchButtonClick: false,
  page: 1,
  totalPages: null
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.SET_PRICE:
      return {
        ...state,
        price: action.payload
      };
    case FilterActionTypes.SET_OBTAININGTYPE:
      return {
        ...state,
        obtainingType: action.payload
      };
    case FilterActionTypes.SET_REALESTATETYPE:
      return {
        ...state,
        realEstateType: action.payload
      };
    case FilterActionTypes.SET_SPACE:
      return {
        ...state,
        space: action.payload
      };
    case FilterActionTypes.SET_ROOMS:
      return {
        ...state,
        rooms: action.payload
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
    case FilterActionTypes.SET_PAGE:
      return { ...state, page: action.payload };
    case FilterActionTypes.RESET_PAGE:
      return { ...state, page: 1 };
    case FilterActionTypes.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    case FilterActionTypes.TOGGLE_SEARCHBUTTON:
      return {
        ...state,
        searchButtonClick: !state.searchButtonClick
      };
    default:
      return state;
  }
};

export default filterReducer;
