import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
  }

  componentDidMount() {
    fetch("http://www.colr.org/json/color/random")
      .then(response => response.json())
      .then(data => {
        let color = data.colors[0].hex;
        this.setState({
          color: color
        });
        console.log(color);

        // console.log(this.state.color.colors[0].hex);
      });
  }

  render() {
    const styles = {
      backgroundColor: `#${this.state.color}`,
      height: "1000px",
      width: "100%"
    };
    return (
      <div>
        <div className="coloredDiv" style={styles}></div>
      </div>
    );
  }
}

export default App;

//{this.state.color.colors[0].hex}
