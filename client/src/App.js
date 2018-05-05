import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Wrapper from "./components/Wrapper";
import NavTabs from "./components/NavTabs";
import SidebarContainer from "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Faq from "./components/Pages/Faq";
import Graph from "./components/Pages/Graph";
import History from "./components/Pages/History";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import Survey from "./components/Pages/Survey";
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
