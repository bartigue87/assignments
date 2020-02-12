import React from "react";

function Pets(props) {
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <h5>Breed: {props.breed}</h5>
    </div>
  );
}

export default Pets;
