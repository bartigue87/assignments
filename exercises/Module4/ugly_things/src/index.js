import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { UglyContextProvider } from "./UglyContext";

ReactDom.render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>,
  document.getElementById("root")
);
