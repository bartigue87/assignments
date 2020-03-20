import React from "react";
const { Provider, Consumer } = React.createContext();

class UglyContextProvider extends React.Component {
  state = {
    uglyThings: [
      {
        title: "Blobfish",
        image:
          "http://1.bp.blogspot.com/-a6qVV8gkkxk/TjLUwWlfivI/AAAAAAAABXY/8Z6GSPVEv8g/s1600/10-blobfish.jpg",
        description: "ugly fish"
      },
      {
        title: "Duck Car",
        image: "https://hotclutch.files.wordpress.com/2010/09/uglycar41.jpg",
        description: "ugly car"
      }
    ]
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(function(prevState) {
      console.log(prevState.uglyThings);
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
          uglyThings: this.state.uglyThings,
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
