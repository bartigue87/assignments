import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { Switch, Route } from "react-router-dom";
import Ingredients from "./Ingredients";

function App() {
  const APP_ID = process.env.REACT_APP_APIID;
  const APP_KEY = process.env.REACT_APP_APIKEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response.hits);
        setRecipes(response.hits);
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
    <div className="container">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Search for meals or keyword "
          className="input"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <Switch>
        <Route path="/:ingredientId">
          <Ingredients />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
