import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Landing from "./components/Pages/Landing"


import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
         <Landing />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
