import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return {
      componentDidMount() {
        fetch("http://www.colr.org/api.html")
          .then(response => response.json())
          .then(data => {
            this.setState({
              color: data
            });
          });
      }
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }} onClick={this.handleClick}>
          Click Me
        </h1>
      </div>
    );
  }
}

export default App;
