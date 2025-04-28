import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = () => {
  const chartData = {
    labels: ["Laptops", "Headphones", "Cameras", "Smartphones"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "300px" }}>
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
