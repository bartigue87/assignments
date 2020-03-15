import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div className="meal">
      <div className="meals">
        <h1 className="meal-info">{props.title}</h1>
        <Link to={`/${props.id}`}>
          <img className="mealImg" src={props.image} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
