import React from "react";

function Square(props) {
  return (
    <div>
      <div className="box" style={{ backgroundColor: props.color }}></div>
    </div>
  );
}

export default Square;
