import DropdownActionTypes from "./dropdown.types";

const INITIAL_STATE = {
  priceDropdown: false,
  obtainingTypeDropdown: false,
  realEstateTypeDropdown: false,
  roomsDropdown: false,
  spaceDropdown: false,
  resultsDropdown: false,
  pageChangerDropdown: false
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DropdownActionTypes.TOGGLE_OBTAININGTYPE_DROPDOWN_HIDDEN: {
      let { obtainingTypeDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        obtainingTypeDropdown: !state.obtainingTypeDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_SPACE_DROPDOWN_HIDDEN: {
      let { spaceDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        spaceDropdown: !state.spaceDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_REALESTATETYPE_DROPDOWN_HIDDEN: {
      let { realEstateTypeDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        realEstateTypeDropdown: !state.realEstateTypeDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_PRICE_DROPDOWN_HIDDEN: {
      let { priceDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        priceDropdown: !state.priceDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_ROOMS_DROPDOWN_HIDDEN: {
      let { roomsDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        roomsDropdown: !state.roomsDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_RESULTS_DROPDOWN_HIDDEN: {
      let { resultsDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        resultsDropdown: !state.resultsDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_PAGECHANGER_DROPDOWN_HIDDEN: {
      let { pageChangerDrodpown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        pageChangerDropdown: !state.pageChangerDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_ALL_DROPDOWNS_FALSE:
      return {
        ...(state = INITIAL_STATE)
      };
    default:
      return state;
  }
};

export default dropdownReducer;
