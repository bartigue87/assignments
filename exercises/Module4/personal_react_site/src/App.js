import React from "react";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <h1>Recipes</h1>
      <div className="flex">
        <Form />
      </div>

      <div className="result-heading"></div>
      <div className="meals"></div>
      <div className="single-meal"></div>
    </div>
  );
}

export default App;
