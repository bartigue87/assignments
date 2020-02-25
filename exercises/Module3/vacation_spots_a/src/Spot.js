import React from "react";

function Spot(props) {
  return (
    <div className="card">
      <h3 className="place">{props.spot.place}</h3>
      <p className="text">Price: ${props.spot.price}</p>
      <p className="text">Time to go: {props.spot.timeToGo}</p>
    </div>
  );
}

export default Spot;
