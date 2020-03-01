import React from "react";
const { Provider, Consumer } = React.createContext();

class UglyContextProvider extends React.Component {
  state = {
    title: "",
    image: "",
    description: "",
    uglyThings: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(function(prevState) {
      return {
        uglyThings: [
          {
            title: prevState.title,
            image: prevState.image,
            description: prevState.description
          },
          ...prevState.uglyThings
        ]
      };
    });
  };

  render() {
    return (
      <Provider
        value={{
          title: this.state.title,
          image: this.state.image,
          description: this.props.description,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UglyContextProvider, Consumer as UglyContextConsumer };
