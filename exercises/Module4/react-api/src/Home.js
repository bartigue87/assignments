import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.meals);
        if (data.meals === null) {
          return alert("There are no search results. Try again.");
        } else {
          setRecipes(data.meals);
        }
      });
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="">
      <h1>Recipe Finder</h1>
      <div classname="flex">
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="Search for meals or keyword "
            className="search"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="meals">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
