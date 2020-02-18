import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      description: "",
      badges: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(function(prevState) {
      const newBadgeItem = this.state.firstName + " " + this.state.lastName;
      return {
        badges: [
          newBadgeItem,
          this.state.email,
          this.state.placeOfBirth,
          this.state.phone,
          this.state.favoriteFood,
          this.state.description
        ]
      };
    });
  }

  render() {
    const mapBadges = this.state.badges.map(function(badge) {
      return <p>{badge}</p>;
    });
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="placeOfBirth"
            value={this.state.placeOfBirth}
            placeholder="Place of Birth"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="phone"
            value={this.state.number}
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="favoriteFood"
            value={this.state.favoriteFood}
            placeholder="Favorite Food"
            onChange={this.handleChange}
          />
          <textarea
            name="description"
            value={this.state.description}
            placeholder="Tell us about yourself"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <div className="divContainer">
          <div className="container">{mapBadges}</div>
        </div>
      </div>
    );
  }
}

export default App;
