import React from "react";

function Spot(props) {
  return (
    <div className="card">
      <h3 className="place">{props.place}</h3>
      <p className="text">Price: ${props.price}</p>
      <p className="text">Time to go: {props.timeToGo}</p>
    </div>
  );
}

export default Spot;
