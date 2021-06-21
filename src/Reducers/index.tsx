import { combineReducers } from "redux";

import HomeReducer from "./HomeReducer";

const store = {
  stations: HomeReducer,
};

export default combineReducers(store);
