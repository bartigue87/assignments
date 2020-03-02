import React from "react";
import { UglyContextConsumer } from "./UglyContext";

function UglyThingsList() {
  return (
    <UglyContextConsumer>
      {context => (
        <div>
          <h3>{context.title}</h3>
          <img src={context.image} />
          <p>{context.description}</p>
        </div>
      )}
    </UglyContextConsumer>
  );
}
//   return <div>{mapUglyThings}</div>;
// const mapUglyThings = this.state.uglyThings.map(function(uglyThing) {}

export default UglyThingsList;
