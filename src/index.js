// -----------------------------
// Import dependencies;
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

// Import components;
import App from "./App.js";
import { ThemeProvider } from "@material-ui/core";
import { Provider as StoreProvider } from "react-redux";
import { theme } from "./theme";
import store from "./redux/store";
// -----------------------------

// -----------------------------
window.onload = () => {
  ReactDOM.render(
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>,
    document.getElementById("app")
  );
};
// -----------------------------
