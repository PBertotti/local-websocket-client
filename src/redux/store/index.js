// -----------------------------
// File: store.js
// Author: Paulo Bruno B. Corá (Intelbras)
// Date: 23/11/2020
// Brief: iFleet 2+ evidence-monitor redux store
// ----------------------------

// ----------------------------
// Import redux dependencies;
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
// ----------------------------

// ----------------------------
// [dev] Compose Debug Enhancers;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

// Create redux store;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
// ----------------------------

// ----------------------------
export default store;
// ----------------------------
