import React from "react";
import { useParams } from "react-router-dom";

function Ingredients(props) {
  const { ingredientId } = useParams();
  const thisIngredient = props.recioe.find(
    ingredient => props.recipe.recipe.label === ingredientId
  );

  function wholeNum(num) {
    return Math.ceil(num);
  }
  return (
    <div>
      <h1>{thisIngredient.title}</h1>
      <ul>
        {thisIngredient.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories: {wholeNum(thisIngredient.calories)}</p>
      <img src={thisIngredient.image} alt="" />
    </div>
  );
}

export default Ingredients;
