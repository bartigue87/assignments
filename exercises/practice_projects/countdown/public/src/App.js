import React from "react";
import "App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to December 25, 2020</div>
        <div>
          <div className="clock-days">14 days</div>
          <div className="clock-hours">30 hours</div>
          <div className="clock-minnutes">15 minutes</div>
          <div className="clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
