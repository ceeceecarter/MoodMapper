import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Wrapper from "../Wrapper";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Faq from "../Pages/Faq";
import Graph from "../Pages/Graph";
import History from "../Pages/History";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Survey from "../Pages/Survey";



class App extends Component {
  render() {
    return (
      <Router>
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
                  {/* <Route exact path="/" component={Landing} /> */}
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
      </Router>
    );
  }
}

export default App;
