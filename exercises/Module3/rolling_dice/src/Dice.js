import React from "react";

function Dice(props) {
  return (
    <div>
      <div className="dice">{props.num}</div>
    </div>
  );
}

export default Dice;
