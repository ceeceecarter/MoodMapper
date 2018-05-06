import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";
import { Row, Col } from 'reactstrap';
import Wrapper from "../Wrapper";
import Login from "../Login";
import Main from "../Main";
import "../../UserRoutes/html-routes.js"
import "./PagesStyles/Landing.css";


class Landing extends Component {   
  render() {
    return (
        <Wrapper> 
    
            <Row>
              <Col lg="8" className="blank-area">
                
              </Col>
              <Col lg="4" className="login-container">
              <Login /> 
              </Col>
            </Row>
            {/* <Switch> */}
                  {/* <Route exact path="/" component={Landing} /> */}
               {/* <Link to="../Main/Main"> Main </Link> */}
                  {/* <Route exact path="/Main" component={Main} /> */}
        
                  {/* <Route component={NoMatch} /> */}
                {/* </Switch> */}
        </Wrapper>
    );
  }
}

export default Landing;