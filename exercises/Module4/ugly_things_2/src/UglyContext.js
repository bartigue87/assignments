import React from "react";
const { Provider, Consumer } = React.createContext();

class UglyContextProvider extends React.Component {
  render() {
    return <Provider value={}>{this.props.children}</Provider>;
  }
}

export { UglyContextProvider, Consumer as UglyContextConsumer };
