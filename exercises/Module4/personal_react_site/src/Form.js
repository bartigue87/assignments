import React from "react";

function Form() {
  return (
    <form className="flex" id="submit">
      <input
        type="text"
        id="search"
        placeholder="Search for meals or keywords"
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Form;
