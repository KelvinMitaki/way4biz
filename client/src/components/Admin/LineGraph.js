import React from "react";
import Chart from "chart.js";

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.test = React.createRef();
  }

  componentDidMount() {
    this.adminLineGraph = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        // maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day",
                // day: "MMM D",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                stepSize: 50,
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "Daily Sales",
            data: [
              {
                x: 0,
                y: 80,
              },
              {
                x: 10,
                y: 50,
              },
            ],
          },
        ],
      },
    });
  }
  render() {
    return (
      <div>
        {/* <input ref={this.test} /> */}
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default LineGraph;
