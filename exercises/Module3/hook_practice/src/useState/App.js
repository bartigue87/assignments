import React, { useState } from "react";

export default function App() {
  //    [state, method to set state]
  const [appState, setAppState] = useState({
    count: 0,
    colors: ["cornflowerblue", "rebeccapurple", "green", "orange", "red"]
  });

  function increment() {
    setAppState(prev => ({ ...prev, count: prev.count + 1 }));
  }
  const { colors, count } = appState;
  return (
    <div style={{ backgroundColor: colors[count % colors.length] }}>
      <h1>{appState.count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
