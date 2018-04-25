import React, { Component } from "react";
import NavTabs from "../NavTabs";
import Faq from "../Pages/Faq";
import Graph from "../Pages/Graph";
import History from "../Pages/History";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Survey from "../Pages/Survey";

class Main extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Faq") {
      return <Faq />;
    } else if (this.state.currentPage === "Graph") {
      return <Graph />;
    } else if (this.state.currentPage === "History") {
      return <History />;
    } else if (this.state.currentPage === "Profile") {
      return <Profile />;
    } else if (this.state.currentPage === "Survey") {
      return <Survey/>;

    } else {
      return <Home/>;
    }
  };

}

export default Main;
