import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App,Login} from "./App";
import * as serviceWorker from "./serviceWorker";

let user = true;
if (user) {
  ReactDOM.render(<App />, document.getElementById("root"));
} else {
  ReactDOM.render(<Login />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
