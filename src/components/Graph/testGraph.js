import React from "react";
import { Chart } from 'react-google-charts';


//code taken from npm google charts page
class ExampleChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartEvents = [
        {
          eventName: 'select',
          callback(Chart) {
              // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
            console.log('Selected ', Chart.chart.getSelection());
          },
        },
      ];
      this.state = {
        options: {
          title: 'Anxiety vs. Depression comparison',
          hAxis: { title: 'Anxiety', minValue: 0, maxValue: 15 },
          vAxis: { title: 'Depression', minValue: 0, maxValue: 15 },
          legend: 'none',
        },
        rows: [
          [8, 12],
          [4, 5.5],
          [11, 14],
          [4, 5],
          [3, 3.5],
          [6.5, 7],
        ],
        columns: [
          {
            type: 'anxiety',
            label: 'Anxiety',
          },
          {
            type: 'depression',
            label: 'Depression',
          },
        ],
      };
    }
    render() {
      return (
        <Chart
          chartType="ScatterChart"
          rows={this.state.rows}
          columns={this.state.columns}
          options={this.state.options}
          graph_id="ScatterChart"
          width="100%"
          height="400px"
          chartEvents={this.chartEvents}
        />
      );
    }
  }
  export default ExampleChart;
  