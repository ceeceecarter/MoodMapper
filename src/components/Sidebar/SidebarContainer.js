import React, { Component } from "react";
import Sidebar from "./Sidebar";
import API from "../../utils/API";
import "./Sidebar.css";
import axios from "axios";

class SidebarContainer extends Component {
    state = {        
        result:{}
        //    "quoteAuthor":"",
           
                // "quoteText": "Difficulties are things that show a person what they are.  ",
                // "quoteAuthor": "Epictetus ",
                       
             
    };

    componentDidMount(){
        console.log("HII");
        axios.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?")
        .then(response => this.setState({result:response.data}))
    }

    // componentDidMount() {
    //    console.log("HEYYY");
    //    this.searchQuotes("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?");
    // }
    
    // searchQuotes = query => {
    //     axios.get(query)
    //     .then((response) => {
    //         console.log(response.data);
    //         this.setState({quoteText:response.data.quoteText, quoteAuthor:response.data.quoteAuthor});
    //       })
    //      .catch((error)=>{
    //         console.log(error);
    //      });
    // }

//    searchQuotes = query => {
//        axios.get(query)
//        .then(res => this.setState({ result: res.data }))
//        .catch(err => console.log(err));
       
//    };  



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