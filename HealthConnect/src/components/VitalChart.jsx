import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const VitalChart = ({ title, dataPoints }) => {
  const data = {
    labels: dataPoints.map((_, index) => `Update ${index + 1}`),
    datasets: [
      {
        label: title,
        data: dataPoints,
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h3>{title}</h3>
      <Line data={data} />
    </div>
  );
};

export default VitalChart;
