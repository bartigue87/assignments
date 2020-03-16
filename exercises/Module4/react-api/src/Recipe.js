import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div>
      <div className="meal">
        <Link to={`/${props.id}`}>
          <img className="mealImg" src={props.image} alt="" />

          <div className="meal-info">
            <h1>{props.title}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
