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