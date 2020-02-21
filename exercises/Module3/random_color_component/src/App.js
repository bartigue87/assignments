import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: {}
    };
  }

  componentDidMount() {
    fetch("http://www.colr.org/json/color/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          color: data
        });

        console.log(this.state.color.colors[0].hex);
      });
  }

  render() {
    // const styles = {
    //   backgroundColor: this.state.color.colors[0].hex}
    // console.log(styles);
    console.log(this.state.color.colors);
    return (
      <div>
        <h1>d</h1>
      </div>
    );
  }
}

export default App;

//{this.state.color.colors[0].hex}
