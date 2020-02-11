import React from "react";
import vacationSpots from "./VacationSpots";
import Spot from "./Spot";

function App() {
  const spotComponent = vacationSpots.map(function(place) {
    return <Spot spot={place} />;
  });
  return <div>{spotComponent}</div>;
}

export default App;
