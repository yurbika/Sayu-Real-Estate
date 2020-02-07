import DropdownActionTypes from "./dropdown.types";

const INITIAL_STATE = {
  preisDropdown: false,
  bezugsartDropdown: false,
  immobilientypDropdown: false,
  zimmerDropdown: false,
  flächeDropdown: false,
  resultsDropdown: false
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DropdownActionTypes.TOGGLE_BEZUGSARTDROPDOWN_HIDDEN: {
      let { bezugsartDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        bezugsartDropdown: !state.bezugsartDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_FLÄCHEDROPDOWN_HIDDEN: {
      let { flächeDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        flächeDropdown: !state.flächeDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_IMMOBILIENTYPDROPDOWN_HIDDEN: {
      let { immobilientypDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        immobilientypDropdown: !state.immobilientypDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_PREISDROPDOWN_HIDDEN: {
      let { preisDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        preisDropdown: !state.preisDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_ZIMMERDROPDOWN_HIDDEN: {
      let { zimmerDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        zimmerDropdown: !state.zimmerDropdown
      };
    }
    case DropdownActionTypes.TOGGLE_RESULTS_HIDDEN: {
      let { resultsDropdown, ...otherStates } = state;
      otherStates = INITIAL_STATE;
      return {
        otherStates,
        resultsDropdown: !state.resultsDropdown
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
