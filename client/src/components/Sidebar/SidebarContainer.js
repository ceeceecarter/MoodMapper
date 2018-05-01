import React, { Component } from "react";
import Sidebar from "./Sidebar";
// import API from "../../utils/API";
import "./Sidebar.css";
import axios from "axios";

class SidebarContainer extends Component {
    // state = {        
    //     result:{}               
             
    // };

    componentDidMount(){
        const self = this;
        axios.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?")
        .then(response => self.setState({data:response.data}))
        console.log(self);
    }


    render(){
        return (
            <div>
                <h1> </h1>
                { this.state && this.state.data &&
                <div>
                    <Sidebar
                    quoteText= {this.state.data.quoteText} 
                    quoteAuthor={this.state.data.quoteAuthor}
                    />
                </div>
                }
            </div>
        )
    }
}


export default SidebarContainer;