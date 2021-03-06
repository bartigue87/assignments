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
      const newBadgeItem = prevState.firstName + " " + prevState.lastName;
      return {
        badges: [
          {
            title: newBadgeItem,
            email: prevState.email,
            birthPlace: prevState.placeOfBirth,
            phone: prevState.phone,
            favFood: prevState.favoriteFood,
            description: prevState.description
          },
          ...prevState.badges
        ]
      };
    });
  }

  render() {
    const mapBadges = this.state.badges.map(function(badge) {
      return (
        <div>
          <p>{badge.title}</p>
          <p>{badge.email}</p>
          <p>{badge.birthPlace}</p>
          <p>{badge.phone}</p>
          <p>{badge.favFood}</p>
          <p>{badge.description}</p>
        </div>
      );
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
