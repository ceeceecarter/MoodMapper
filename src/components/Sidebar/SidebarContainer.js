import React, { Component } from "react";
import Sidebar from "./Sidebar";
// import API from "../../utils/API";
import "./Sidebar.css";
import axios from "axios";

class SidebarContainer extends Component {
    state = {        
        result:{}               
             
    };

    componentDidMount(){
        console.log("HII");
        axios.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?")
        .then(response => this.setState({result:response.data}))
    }


    render(){
        return (
            <div>
                <Sidebar
                   quoteText= {this.state.result.quoteText} 
                   quoteAuthor={this.state.result.quoteAuthor}
                
                />
            </div>
        )
    }
}


export default SidebarContainer;