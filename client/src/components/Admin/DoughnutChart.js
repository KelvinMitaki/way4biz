import React from "react";
import Chart from "chart.js";

import "./DoughnutChart.css";

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.adminDoughnutChart = new Chart(this.canvasRef.current, {
      type: "doughnut",
      // options: {
      //   maintainAspectRatio: false,
      // },
      data: {
        labels: this.props.data.map((d) => d.label),
        datasets: [
          {
            data: this.props.data.map((d) => d.value),
            backgroundColor: this.props.colors,
          },
        ],
      },
    });
  }
  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default DoughnutChart;
