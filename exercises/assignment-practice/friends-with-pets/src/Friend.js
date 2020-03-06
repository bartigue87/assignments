import React from "react";
import friendsArr from "./friendsArr";
import Pets from "./Pets";

function Friend(props) {
  const petsMap = props.pets.map(pet => {
    return <Pets key={pet.id} name={pet.name} breed={pet.breed} />;
  });
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      Pets: {petsMap}
    </div>
  );
}

export default Friend;
