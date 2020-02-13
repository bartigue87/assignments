import React from "react";
import Square from "./Square";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: "white"
    };
  }
  render() {
    const squareColors = this.state.colors;
    return (
      <div className="container">
        <div className="box1">{squareColors}</div>
        <div className="box2">{squareColors}</div>
        <div className="box3">{squareColors}</div>
        <div className="box4">{squareColors}</div>
      </div>
    );
  }
}

export default App;
