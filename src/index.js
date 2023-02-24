import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./StateManagement/Store";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
