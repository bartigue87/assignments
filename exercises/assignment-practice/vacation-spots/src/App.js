import React from "react";
import Spots from "./Spots";
import vacationArr from "./vacationArr";

function App() {
  const mappedArr = vacationArr.map(spot => {
    return (
      <Spots
        key={spot.id}
        place={spot.place}
        price={spot.price}
        timeToGo={spot.timeToGo}
      />
    );
  });
  return <div>{mappedArr}</div>;
}

export default App;
