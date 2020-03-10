import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

function Footer(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <footer className={`${context.theme}-theme`}>
          <h2>Footer</h2>
        </footer>
      )}
    </ThemeContextConsumer>
  );
}

export default Footer;
