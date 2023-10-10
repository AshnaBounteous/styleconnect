import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const MonthlySales = ({ monthlySalesData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: Object.keys(monthlySalesData),
    datasets: [
      {
        label: "Bar Chart",
        data: Object.values(monthlySalesData).map((value) =>
          parseFloat(value.replace("$", ""))
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <p className="text-start fs-6">Monthly Sales</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlySales;
