import React from "react";
import vacationSpots from "./VacationSpots";
import Spot from "./Spot";

function App() {
  const vacationComponents = vacationSpots.map(function(spots) {
    return <Spot key={spots.id} spot={spots} />;
  });
  return <div>{vacationComponents}</div>;
}

export default App;
