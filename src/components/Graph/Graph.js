import React from "react";
import { Chart } from 'react-google-charts';


//const Graph = () => (
  var GoogleLineChart = React.createClass({
    render: function(){
      return React.DOM.div({id: this.props.graphName, style: {height: "500px"}});
    },
    componentDidMount: function(){
      this.drawCharts();
    },
    componentDidUpdate: function(){
      this.drawCharts();
    },
    drawCharts: function(){
      var data = google.visualization.arrayToDataTable(this.props.data);
      var options = {
        title: 'ABC',
      };
  
      var chart = new google.visualization.LineChart(
        document.getElementById(this.props.graphName)
      );
      chart.draw(data, options);
    }
  });
//);
// InsightApp.prototype.start = function() {
//   that = this;

//   var options = {
//     dataType: "script",
//     cache: true,
//     url: "https://www.google.com/jsapi",
//   };
//   jQuery.ajax(options).done(function(){
//     google.load("visualization", "1", {
//       packages:["corechart"],
//       callback: function() {
//         that.startRenderingComponents();
//       }
//     });
//   });
// };

export default GoogleLineChart;
