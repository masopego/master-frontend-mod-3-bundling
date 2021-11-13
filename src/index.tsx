import React from "react";
import ReactDOM from "react-dom";
import logo from "./content/logo_1.png";

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <img src={logo} />
  </div>,
  document.getElementById("root")
);
