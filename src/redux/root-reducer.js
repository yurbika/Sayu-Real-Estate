import { combineReducers } from "redux";

import inspirationReducer from "./inspiration/inspiration.reducer";
import filterReducer from "./filter/filter.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";
import resultReducer from "./results-dropdown/results.reducer";
import homeReducer from "./home/home.reducer";
import sliderReducer from "./slider/slider.reducer";
import popupReducer from "./popup/popup.reducer";
import realEstateReducer from "./real-estate/real-estate.reducer";
import signInAndSignUpReducer from "./sign-in-and-sign-up/sign-in-and-sign-up.reducer";

export default combineReducers({
  inspiration: inspirationReducer,
  filter: filterReducer,
  dropdown: dropdownReducer,
  results: resultReducer,
  home: homeReducer,
  slider: sliderReducer,
  popup: popupReducer,
  realEstate: realEstateReducer,
  signInAndSignUp: signInAndSignUpReducer
});
