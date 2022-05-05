import React, { useState } from "react";
import { useResult } from "./util/useResult";
import { Doughnut, Line, Pie } from "react-chartjs-2"; // ref: https://github.com/reactchartjs/react-chartjs-2

const Factors = () => {
  const [type, setType] = useState(1);
  const result = useResult().result;
  const { sender, subject, cc, date, bodyContent, attachments, total } = result;

  let labels = [
    "Sender",
    "Subject",
    "CC",
    "Date",
    "Body Content",
    "Attachments",
  ];
  let values =
    total === 0
      ? [sender, subject, cc, date, bodyContent, attachments, 100 - total]
      : [sender, subject, cc, date, bodyContent, attachments];

  const graph = {
    labels: labels,
    datasets: [
      {
        label: "Phishing inspection (%)",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(192,192,192,0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(192,192,192,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    plugins: {
      legend: { display: true },
      title: {
        display: false,
        text: "Phishing inspection (%)",
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (data) => {
            let values = data.formattedValue;
            let label = data.label;
            return label !== "" ? label + ": " + values : "No Risk Detected";
          },
        },
        enabled: true,
      },
    },
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
          <Doughnut data={graph} options={total === 0 && option} />
        </div>
      );
    } else if (type === 2) {
      return (
        <div>
          <Line data={graph} />
        </div>
      );
    } else if (type === 3) {
      return (
        <div>
          <Pie data={graph} options={total === 0 && option} />
        </div>
      );
    }
  };

  return (
    <div>
      {renderGraph()}
      <div className="dropdown-content" id="myDropdown">
        <button onClick={onClickHandler}>Change</button>
      </div>
    </div>
  );
};

export default Factors;
