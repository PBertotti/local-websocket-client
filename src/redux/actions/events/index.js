/* eslint-disable array-callback-return */
// -----------------------------
// File: index.js
// Author: Gabriel Luiz Espindola Pedro (Intelbras)
// Date: 20/04/2021
// Brief: iFleet 2 Tracking settings actions
// ----------------------------

// ----------------------------
// Import action types;
import { STORE_EVENT } from "./types.js";

// ----------------------------

// ----------------------------
// Get Settings;
export const handleEventReceivement = (event) => async (dispatch) => {
  const eventMessage = JSON.stringify(event);

  dispatch({ type: STORE_EVENT, payload: eventMessage });
};
// ----------------------------
