import React from "react";
import { useResult } from "./util/useResult";
import { Bar, Doughnut, Pie } from "react-chartjs-2"; // ref: https://github.com/reactchartjs/react-chartjs-2

const Total = ({ type, setType, height }) => {
  const result = useResult().result;
  const high = result.total;
  const low = 100 - high;
  const graph = {
    labels: ["High Risk", "Low Risk"],
    datasets: [
      {
        label: "Risk Prediction",
        data: [high, low],
        backgroundColor: ["rgba(255,0,0,0.4)", "rgba(100,100,100,1)"],
        borderColor: ["rgba(255,0,0,1)", "rgba(192,192,192,1)"],
        borderWidth: 1,
      },
    ],
  };
  const onClickHandler = () => {
    if (type === 3) {
      setType(1);
    } else {
      setType(type + 1);
    }
  };
  const renderGraph = () => {
    if (type === 1) {
      return (
        <div>
          <Doughnut data={graph} />
        </div>
      );
    } else if (type === 2) {
      return (
        <div>
          <Bar data={graph} height={height} />
        </div>
      );
    } else if (type === 3) {
      return (
        <div>
          <Pie data={graph} />
        </div>
      );
    }
  };
  return (
    <div>
      {renderGraph()}
      <div className="dropdown-content" id="myDropdown">
        <button onClick={onClickHandler} className="nextButton">
          Change
        </button>
      </div>
    </div>
  );
};

export default Total;
