import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";

window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
