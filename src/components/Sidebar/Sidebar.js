import React from "react";
import "./Sidebar.css";
import API from "../../utils/API";

const Sidebar = (props) => (
 <div className="Sidebar">
   
{/* <p id="side-bar">Sidebar goes here</p> */}
<h5 style={{fontStyle: "italic"}}>Quote: {props.quoteText}</h5>
<p style={{fontStyle: "italic"}}>Author: {props.quoteAuthor}</p>
  
</div>
);


export default Sidebar;