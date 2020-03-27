import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./styles.css";

//axios.get("/movies") instead of....
//axios.get("http://rickandmortyapi.com")

ReactDom.render(<App />, document.getElementById("root"));
