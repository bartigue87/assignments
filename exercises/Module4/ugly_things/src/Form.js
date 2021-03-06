import React from "react";
import { UglyContextConsumer } from "./UglyContext";

function Form() {
  return (
    <UglyContextConsumer>
      {context => (
        <div className="form">
          <form onSubmit={context.handleSubmit}>
            <input
              type="text"
              name="title"
              value={context.title}
              placeholder="Tilte"
              onChange={context.handleChange}
            />

            <input
              type="text"
              name="image"
              value={context.image}
              placeholder="IMG URL"
              onChange={context.handleChange}
            />

            <input
              type="text"
              name="description"
              value={context.description}
              placeholder="Description"
              onChange={context.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
      )}
    </UglyContextConsumer>
  );
}

export default Form;
