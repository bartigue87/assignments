import React from "react";

function Recipe(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{props.calories}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Recipe;
