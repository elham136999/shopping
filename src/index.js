import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Getproduct } from "./Getproduct";
import { CartitemContext } from "./CartitemContext";

ReactDOM.render(
  <Getproduct>
    <CartitemContext>
      <App />
    </CartitemContext>
  </Getproduct>,

  document.getElementById("root")
);
