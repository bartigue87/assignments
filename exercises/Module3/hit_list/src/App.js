import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      targets: []
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json"
    )
      .then(response => response.json())
      .then(data => [
        this.setState({
          targets: data
        })
      ]);
  }

  render() {
    console.log(this.state.targets);
    const targetArr = this.state.targets.map(function(target) {
      return (
        <div className="container">
          <h4>{target.name}</h4>

          <img className="image" src={target.image} />
        </div>
      );
    });
    return (
      <div>
        <h1>Hit List</h1>
        <div className="div-container">{targetArr}</div>
      </div>
    );
  }
}

export default App;
