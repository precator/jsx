import React from "react";
import ReactDOM, { findDOMNode } from "react-dom";

const App = () => {
  const buttonText = "Click Me!";

  return (
    <div>
      <label class="label" for="name">
        Enter name 2:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
