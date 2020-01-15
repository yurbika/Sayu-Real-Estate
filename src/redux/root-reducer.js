import { combineReducers } from "redux";

import inspirationsReducer from "./inspiration-sketion/inspiration.reducer";

export default combineReducers({
  inspirationsSketion: inspirationsReducer
});
