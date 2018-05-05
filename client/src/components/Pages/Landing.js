import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Wrapper from "../Wrapper";
import Login from "../Login";
import App from "../../App";
import "../../UserRoutes/html-routes.js"
import "./PagesStyles/Landing.css";


class Landing extends Component {   
  render() {
    return (
      <Router>
        <Wrapper> 
    
            <Row>
              <Col lg="8" className="blank-area">
                
              </Col>
              <Col lg="4" className="login-container">
              <Login /> 
              </Col>
            </Row>
            <Link to ='/Main' >Main</Link>
        </Wrapper>
      </Router>
    );
  }
}

export default Landing;