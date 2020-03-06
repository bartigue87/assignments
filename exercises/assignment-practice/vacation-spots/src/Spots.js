import React from "react";

function Spots(props) {
  return (
    <div className="container">
      <h1>{props.place}</h1>
      <h4>Price: ${props.price}</h4>
      <h4>Time to go: {props.timeToGo}</h4>
    </div>
  );
}

export default Spots;
