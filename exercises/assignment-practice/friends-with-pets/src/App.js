import React from "react";
import friendsArr from "./friendsArr";
import Friend from "./Friend";

function App() {
  const friendMap = friendsArr.map(function(friend) {
    return (
      <Friend
        key={friend.id}
        name={friend.name}
        age={friend.age}
        pets={friend.pets}
      />
    );
  });
  return <div>{friendMap}</div>;
}

export default App;
