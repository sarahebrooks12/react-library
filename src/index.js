import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Main from "./Main.js";
import { BrowserRouter as Router } from "react-router-dom";
// import App from './splashPage/Library';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
