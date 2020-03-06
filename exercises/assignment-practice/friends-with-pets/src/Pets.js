import React from "react";

function Pets(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.breed}</h4>
    </div>
  );
}

export default Pets;
