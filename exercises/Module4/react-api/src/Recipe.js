import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* <ul>
        {props.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul> */}
      {/* <p>Calories: {wholeNum(props.calories)}</p> */}
      <Link to={`/${props.key}`}>
        <img src={props.image} alt="" />
      </Link>
    </div>
  );
}

export default Recipe;
