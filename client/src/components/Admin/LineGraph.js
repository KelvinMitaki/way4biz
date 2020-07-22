import React from "react";
import Chart from "chart.js";
import { connect } from "react-redux";

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.adminLineGraph = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        maintainAspectRatio: true,
        responsive: true,
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
                stepSize: 50,
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
    const test = this.props.weeklySales.map((sale) => ({
      day: new Date(sale.createdAt).getDay(),
      items: sale.items,
    }));
    console.log(test);
    const possibleWeekArrangements = [
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
      ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"],
      ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
      ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
      ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = test.map((t) => {
      const te = days.filter((day, index) => index === t.day);
      return {
        ...te,
        items: t.items
          .map((ite) => ite.quantity)
          .reduce((acc, cur) => acc + cur, 0),
      };
    });
    // .reduce((acc, cur) => acc.concat(cur), []);
    // console.log("d", d);
    const lookup = d.reduce((acc, cur) => {
      acc[cur["0"]] = ++acc[cur["0"]] || 0;
      return acc;
    }, {});
    const duplicates = d.filter((e) => lookup[e["0"]]);

    if (duplicates.length !== 0) {
      const sumDuplicates = duplicates
        .map((dup) => dup.items)
        .reduce((acc, cur) => acc + cur, 0);
      const filteredDup = { 0: duplicates[0]["0"], items: sumDuplicates };

      const withoutDup = d.filter((items) => items["0"] !== filteredDup["0"]);
      const newArr = [...withoutDup, filteredDup];

      console.log("newArr", newArr);

      var myWeek;

      for (var i = 0; i < possibleWeekArrangements.length; i++) {
        //O(1) best case O(7) worst case
        if (possibleWeekArrangements[i][0] === newArr[0][0]) {
          myWeek = possibleWeekArrangements[i];
          break;
        }
      }

      console.log("my week", myWeek);

      var desiredArray = [];

      for (var i = 0; i < myWeek.length; i++) {
        //O(7) best and worst case
        if (newArr[0][0] === myWeek[i]) {
          var data = [myWeek[i], newArr[0].items];
          newArr.shift();
          desiredArray.push(data);
        } else {
          var data = [myWeek[i], 0];
          desiredArray.push(data);
        }
      }

      console.log("desiredArray", desiredArray);
      // take the desired array to the linegraph.

      const daysWithoutOrders = days.filter((day) => {
        const dayFound = newArr.find((d) => d["0"] === day);
        if (dayFound) {
          return false;
        }
        return true;
      });
      const daysArrObj = daysWithoutOrders.map((day) => ({ 0: day, items: 0 }));
      const allDays = [...newArr, ...daysArrObj];
      console.log(allDays);
    }
    console.log(d);
    return (
      <div>
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    weeklySales: state.product.weeklySales,
  };
};
export default connect(mapStateToProps)(LineGraph);
