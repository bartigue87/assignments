import React from "react";
import { UglyContextConsumer } from "./UglyContext";

function UglyThingsList() {
  return (
    <UglyContextConsumer>
      {context =>
        context.uglyThings.map(uglyThing => (
          <div className="container">
            <h3>{uglyThing.title}</h3>
            <img className="uglyImg" src={uglyThing.image} alt="" />
            <h3>{uglyThing.description}</h3>
            {/* <button className="button" onClick={handleEditClick}>
              Edit
            </button>
            <button onClick={handleDelClick}>Delete</button> */}
          </div>
        ))
      }
    </UglyContextConsumer>
  );
}
//   return <div>{mapUglyThings}</div>;
// const mapUglyThings = this.state.uglyThings.map(function(uglyThing) {}

export default UglyThingsList;
