import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Bar data={{ chartData }} />;
}

export default BarChart;
