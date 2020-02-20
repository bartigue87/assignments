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
    return (
      <div>
        <h1>j</h1>
      </div>
    );
  }
}

export default App;
