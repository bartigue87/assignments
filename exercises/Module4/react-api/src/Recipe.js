import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div>
      <h1 className="meal-info">{props.title}</h1>
      <Link to={`/recipe/${props.id}`}>
        <img className="img" src={props.image} />
      </Link>
    </div>
  );
}

export default Recipe;
