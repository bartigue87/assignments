import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Ingredients from "./Ingredients";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Ingredients />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
