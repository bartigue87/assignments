import React from "react";
import vacationSpots from "./VacationSpots";
import Spot from "./Spot";

function App() {
  const vacationComponents = vacationSpots.map(function(spot) {
    return (
      <Spot
        key={spot.id}
        place={spot.place}
        price={spot.price}
        timeToGo={spot.timeToGo}
      />
    );
  });
  return <div>{vacationComponents}</div>;
}

export default App;
