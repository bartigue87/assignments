import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  search = event => {
    event.preventDefault();
    const baseUrl = "https://api.spotify.com/v1/search?";
    const fetchUrl = `${baseUrl}q=${this.state.query}&type=artist&limit=1`;
    console.log("fetchUrl", fetchUrl);

    fetch(fetchUrl, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        console.log("artist", artist);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">Music Finder</h1>
        <div>
          <form className="flex" id="submit" onSubmit={this.search}>
            <input
              type="text"
              name="query"
              value={this.state.query}
              id="search"
              placeholder="Search for artists..."
              onChange={this.handleChange}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="gallery">Gallery</div>
      </div>
    );
  }
}
export default App;
