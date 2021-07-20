// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá (Intelbras)
// Date: 23/11/2020
// Brief: iFleet 2+ evidence-monitor reduce combiner;
// ----------------------------

// ----------------------------
import { combineReducers } from "redux";

import { reducer as eventReducer } from "./events";
// ----------------------------

export default combineReducers({
  events: eventReducer,
});
