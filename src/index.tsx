import React from "react";
import ReactDOM from "react-dom";
import logo from "./content/bird.png";
import "./styles.scss";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <img src={logo} />
  </div>,
  document.getElementById("root")
);
