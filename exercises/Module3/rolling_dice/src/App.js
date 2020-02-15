import React from "react";
import Dice from "./Dice";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      num5: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(function(prevState) {
      return {
        num1: Math.floor(Math.random(prevState.num1) * 6) + 1,
        num2: Math.floor(Math.random(prevState.num2) * 6) + 1,
        num3: Math.floor(Math.random(prevState.num3) * 6) + 1,
        num4: Math.floor(Math.random(prevState.num4) * 6) + 1,
        num5: Math.floor(Math.random(prevState.num5) * 6) + 1
      };
    });
  }

  render() {
    return (
      <div className="dice-container">
        <div className="container">
          <Dice num={this.state.num1} />
          <Dice num={this.state.num2} />
          <Dice num={this.state.num3} />
          <Dice num={this.state.num4} />
          <Dice num={this.state.num5} />
        </div>
        <button onClick={this.handleClick}>Roll</button>
      </div>
    );
  }
}

export default App;
