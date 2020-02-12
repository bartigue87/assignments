import React from "react";
import Friend from "./Friend";
import friendsArr from "./FriendsArr";

function App() {
  const friendsComponents = friendsArr.map(function(friend) {
    return (
      <Friend
        key={friend.id}
        name={friend.name}
        age={friend.age}
        pets={friend.pets}
      />
    );
  });
  return <div>{friendsComponents}</div>;
}

export default App;
