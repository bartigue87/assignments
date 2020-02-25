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
      const fullName = prevState.firstName + "" + prevState.lastName;
      return {
        badges: [
          {
            fullName: fullName,
            email: prevState.email,
            placeOfBirth: prevState.placeOfBirth,
            phone: prevState.phone,
            favoriteFood: prevState.favoriteFood,
            description: prevState.description
          },
          ...prevState.badges
        ]
      };
    });
  }

  render() {
    const {
      firstName,
      email,
      phone,
      placeOfBirth,
      favoriteFood,
      description,
      lastName
    } = this.state;
    const mapBadges = this.state.badges.map(function(badge) {
      return (
        <div>
          <p>{badge.fullName}</p>
          <p>{badge.email}</p>
          <p>{badge.placeOfBirth}</p>
          <p>{badge.phone}</p>
          <p>{badge.favoriteFood}</p>
          <p>{badge.description}</p>
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={placeOfBirth}
            name="placeOfBirth"
            placeholder="Place of Birth"
            onChange={this.handleChange}
          />
          <input
            type="number"
            value={phone}
            name="phone"
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={favoriteFood}
            name="favoriteFood"
            placeholder="Favorite Food"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={description}
            name="description"
            placeholder="Tell us about yourself"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <div>{mapBadges}</div>
      </div>
    );
  }
}

export default App;
