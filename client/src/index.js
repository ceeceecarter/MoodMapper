
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
