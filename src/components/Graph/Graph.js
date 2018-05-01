import React,{Component} from "react";
import { Chart } from 'react-google-charts';

export default class Graph extends Component {
  constructor (props) {
    //makes sure component gets props from parent
    //super--calls the constructor of the parent class
    super(props)
    this.state = {
      chartdata : [['Day', 'Anxiety', 'Depression'], [4, 8,3], [3, 6, 4]] 
    }
  }
  render () {
    return (
      <div className = {'graph-results'}>
        <Chart
        chartType = "ScatterChart"
        data ={this.state.chartdata}
        options = {{ }}
        graph_id = "ScatterChart"
        width = "100%"
        height = "400px"
        overflow = "auto"
        //legend_toggle is prop that sets prop value to true
        legend_toggle
        />
      </div>
    );
  }
}
//const Graph = () => (
 // var GoogleLineChart = React.createClass({
    //render: function(){
//       return React.DOM.div({id: this.props.graphName, style: {height: "500px"}});
//     },
//     componentDidMount: function(){
//       this.drawCharts();
//     },
//     componentDidUpdate: function(){
//       this.drawCharts();
//     },
//     drawCharts: function(){
//       var data = google.visualization.arrayToDataTable(this.props.data);
//       var options = {
//         title: 'ABC',
//       };
  
//       var chart = new google.visualization.LineChart(
//         document.getElementById(this.props.graphName)
//       );
//       chart.draw(data, options);
//     }
//   });
// //);
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

//export default GoogleLineChart;
