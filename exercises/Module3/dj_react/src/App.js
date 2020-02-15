import React from "react";
import Square from "./Square";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["white", "white", "white", "white"]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSecondClick = this.handleSecondClick.bind(this);
    this.handleThirdClick = this.handleThirdClick.bind(this);
    this.handleFourthClick = this.handleFourthClick.bind(this);
    this.handleFifthClick = this.handleFifthClick.bind(this);
    this.handleSixthClick = this.handleSixthClick.bind(this);
    this.handleSeventhClick = this.handleSeventhClick.bind(this);
    this.handleEighthClick = this.handleEighthClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = ["black", "black", "black", "black"])
      };
    });
  }

  handleSecondClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = ["purple", "purple", ,])
      };
    });
  }

  handleThirdClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = [, , "blue"])
      };
    });
  }

  handleFourthClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = [, , , "blue"])
      };
    });
  }

  handleFifthClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = ["red", , ,])
      };
    });
  }

  handleSixthClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = [, "orange", ,])
      };
    });
  }

  handleSeventhClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = [, , "yellow"])
      };
    });
  }

  handleEighthClick() {
    this.setState(function(prevState) {
      return {
        colors: (prevState.colors = [, , , "green"])
      };
    });
  }

  render() {
    return (
      <div className="container">
        <Square color={this.state.colors[0]} />
        <Square color={this.state.colors[1]} />
        <Square color={this.state.colors[2]} />
        <Square color={this.state.colors[3]} />
        <div>
          <button onClick={this.handleClick}>1</button>
          <button onClick={this.handleSecondClick}>2</button>
          <button onClick={this.handleThirdClick}>3</button>
          <button onClick={this.handleFourthClick}>4</button>
        </div>
        <div>
          <button onClick={this.handleFifthClick}>5</button>
          <button onClick={this.handleSixthClick}>6</button>
          <button onClick={this.handleSeventhClick}>7</button>
          <button onClick={this.handleEighthClick}>8</button>
        </div>
      </div>
    );
  }
}

export default App;
