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
        title: {
          display: true,
          text: "Daily Sales",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 200,
                stepSize: 0,
              },
            },
          ],
        },
      },
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            data: [86, 114, 10, 100],
            label: "Sales",
            borderColor: "#f76b1a",
            fill: false,
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
