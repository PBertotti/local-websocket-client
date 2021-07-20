// -----------------------------
// File: index.js
// Author: Gabriel Luiz Espindola Pedro (Intelbras)
// Date: 20/04/2021
// Brief: iFleet 2 Tracking settings reducer;
// ----------------------------

// ----------------------------
// Import Login action types;
import { STORE_EVENT } from "../../actions/events/types";
// ----------------------------

// ----------------------------
//Define initial state;
const initialState = [];

//Create Login reducer;
export const reducer = (state = initialState, action) => {
  const data = action.payload;

  switch (action.type) {
    case STORE_EVENT: {
      return [...state, data];
    }
    default:
      return state;
  }
};
// ----------------------------
