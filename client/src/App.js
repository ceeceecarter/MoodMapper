import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Container className="reactstrapContainer">
            <Row>
              <Col lg="12" className="NavTabs">
                <NavTabs />
              </Col>
            </Row>
            <Row>
              <Col lg="2" className="sidebar">
                <SidebarContainer />{" "}
              </Col>
              <Col lg="10" className="home">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Survey" component={Survey} />
                  <Route exact path="/Graph" component={Graph} />
                  <Route exact path="/Faq" component={Faq} />
                  <Route exact path="/Profile" component={Profile} />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </Col>
            </Row>
            <Row>
              <Col lg="12" className="footer">
                <Footer />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
