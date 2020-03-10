import React from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    theme: "light"
  };

  toggleTheme = () => {
    this.setState(prevstate => {
      return {
        theme: prevstate.theme === "light" ? "dark" : "light"
      };
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
