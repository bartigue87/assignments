import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>hello world</div>
    </GlobalProvider>
  );
}

export default App;
