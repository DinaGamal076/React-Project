import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {
  const chartData = {
    labels: ["Laptops", "Headphones", "Cameras", "Smartphones"],
    datasets: [
      {
        data: [30, 25, 20, 25],
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
      <Pie
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

export default PieChart;
