// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       list: ["Brandon Artigue"]
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState(function(prevState) {
//       const newListItem = `${this.state.firstName} ${this.state.lastName}`;
//       return { list: [...prevState.list, newListItem] };
//     });
//   }

//   render() {
//     const mapListItems = this.state.list.map(function(name) {
//       return <li>{name}</li>;
//     });
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.firstName}
//             name="firstName"
//             placeholder="First Name"
//             onChange={this.handleChange}
//           />

//           <input
//             type="text"
//             value={this.state.lastName}
//             name="lastName"
//             placeholder="Last Name"
//             onChange={this.handleChange}
//           />
//           <h1>
//             {this.state.firstName} {this.state.lastName}
//           </h1>
//           <button>Submit</button>
//         </form>
//         <ul>{mapListItems}</ul>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      list: ["Brandon Artigue"]
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
      const newList = `${this.state.firstName} ${this.state.lastName}`;
      return {
        list: [...prevState.list, newList]
      };
    });
  }

  render() {
    const mapListItems = this.state.list.map(function(name) {
      return <li>{name}</li>;
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />

          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <button>Submit</button>
        </form>
        <ul>{mapListItems}</ul>
      </div>
    );
  }
}

export default App;
