import React from "react";
import "./App.css";
import Clock from "./Clock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deadline: "December 25, 2020",
      newDeadline: ""
    };
  }

  changeDeadline = () => {
    this.setState({ deadline: this.state.newDeadline });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input
            className="input"
            placeholder="new date"
            name="newDeadline"
            value={this.state.newDeadline}
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.changeDeadline}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
