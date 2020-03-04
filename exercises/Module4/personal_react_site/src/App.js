import React from "react";

function App() {
  return (
    <div class="container">
      <h1>Recipes</h1>
      <div class="flex">
        <form class="flex" id="submit">
          <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
          />
          <button class="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>

      <div id="result-heading"></div>
      <div id="meals" class="meals"></div>
      <div id="single-meal"></div>
    </div>
  );
}

export default App;
