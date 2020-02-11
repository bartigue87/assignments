import React from "react";

function Spot(props) {
  return (
    <div>
      <h2>{props.vacationSpot.place}</h2>
      <p>{props.spot.price}</p>
      <p>{props.spot.timeToGo}</p>
    </div>
  );
}

export default Spot;
