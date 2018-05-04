import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import Wrapper from "../Wrapper";
import Login from "../Login";
import App from "../../App";
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

                {/* <Link to ="../../App"> main app is here</Link> */}
                 
                </Col>
              </Row>
            
          </Wrapper>
        </Router>
      );
    }
  }
  
  export default Landing;