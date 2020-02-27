import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
import UserContext from "./userContext";

ReactDOM.render(
  <UserContext.Provider value={"Brandon-87-WR"}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);
