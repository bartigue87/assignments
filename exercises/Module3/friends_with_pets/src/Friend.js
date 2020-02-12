import React from "react";
import Pets from "./Pets";
import friendsArr from "./FriendsArr";

function Friend(props) {
  console.log(props);
  const petsComponents = props.pets.map(function(pet) {
    return <Pets name={pet.name} breed={pet.breed} />;
  });
  return (
    <div>
      <h3 className="name">{props.name}</h3>
      <p className="age">Age: {props.age}</p>
      <div>
        Pets:
        <ul>{petsComponents}</ul>
      </div>
    </div>
  );
}

export default Friend;
