import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Faq from "./pages/Faq";
import Graph from "./pages/Graph";
import History from "./pages/History";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Survey from "./pages/Survey";

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

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Main;
