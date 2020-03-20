import React from "react";
import { UglyContextConsumer } from "./UglyContext";

class Form extends React.Component {
  state = {
    title: "",
    image: "",
    description: "",
    uglyThings: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <UglyContextConsumer>
        {context => (
          <div>
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
}

export default Form;
