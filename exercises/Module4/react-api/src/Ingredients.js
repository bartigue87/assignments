import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Ingredients(props) {
  const { id } = useParams();
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItems] = useState("");

  const fetchItems = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.meals[0]);
        setItems(data.meals[0]);
      });
  };

  const [ingredients] = useState([]);

  for (let i = 1; i <= 20; i++) {
    if (item[`strIngredient${i}`]) {
      ingredients.push(
        `${item[`strIngredient${i}`]} - ${item[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  return (
    <div class="single-meal">
      <h1>{item.strMeal}</h1>
      <img src={item.strMealThumb} alt="" />
      <div class="single-meal-info">
        {item.strCategory ? <p>{item.strCategory}</p> : ""}
        {item.strArea ? <p>{item.strArea}</p> : ""}
      </div>
      <div class="main">
        <p>{item.strInstructions}</p>
        <h2>Ingredients</h2>
        {console.log(ingredients)}
        <ul>
          {ingredients.map(ing => (
            <li>{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ingredients;
