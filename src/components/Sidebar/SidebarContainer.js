import React, { Component } from "react";
import Sidebar from "./Sidebar";
import API from "../../utils/API";
import "./Sidebar.css";
import axios from "axios";

class SidebarContainer extends Component {
    state = {
        result: {
            
                "quoteText": "Difficulties are things that show a person what they are.  ",
                "quoteAuthor": "Epictetus ",
                       
        }     
    };

    componentDidMount() {
       console.log("HEYYY");
       this.searchQuotes("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?");
    }
    

   searchQuotes = query => {
       axios.get(query)
       .then(res => console.log(res));
       
   };  

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