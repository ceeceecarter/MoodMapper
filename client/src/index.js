
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./index.css";
import App from "./App";
// import Landing from "../src/components/Pages/Landing";
import registerServiceWorker from "./registerServiceWorker";

<Route exact path="/App" component={App} />
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
