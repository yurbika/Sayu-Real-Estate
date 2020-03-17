import { combineReducers } from "redux";

import inspirationReducer from "./inspiration/inspiration.reducer";
import filterReducer from "./filter/filter.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";
import resultReducer from "./results-dropdown/results.reducer";
import startseitenReducer from "./startseite/startseite.reducer";
import sliderReducer from "./slider/slider.reducer";
import popupReducer from "./popup/popup.reducer";
import realEstateReducer from "./real-estate/real-estate.reducer";

export default combineReducers({
  inspiration: inspirationReducer,
  filter: filterReducer,
  dropdown: dropdownReducer,
  results: resultReducer,
  startseite: startseitenReducer,
  slider: sliderReducer,
  popup: popupReducer,
  realEstate: realEstateReducer
});
