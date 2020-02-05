import { combineReducers } from "redux";

import inspirationsReducer from "./inspiration-sketion/inspiration.reducer";
import filterReducer from "./filter/filter.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";
import resultReducer from "./results-dropdown/results.reducer";

export default combineReducers({
  inspirationsSketion: inspirationsReducer,
  filter: filterReducer,
  dropdown: dropdownReducer,
  results: resultReducer
});
