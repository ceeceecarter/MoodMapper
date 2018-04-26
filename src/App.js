import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Wrapper from "./components/Wrapper";
import NavTabs from "./components/NavTabs";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render () {
    return (
      <Wrapper>
      <Container className="reactstrapContainer">
        <Row>
          <Col md="12" className="NavTabs">  <NavTabs />  </Col>
        </Row>
        <Row>
          <Col md="2" className="sidebar"><Sidebar /> </Col>
          <Col md ="10" className="main"><Main />
          
      
  </Col>
        </Row>
        <Row>
          <Col md="12" className="footer"><Footer /></Col>
          
        </Row>
        
      </Container>
        </Wrapper>
    );
  }





}

export default App;
