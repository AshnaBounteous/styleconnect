import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const SocialSales = ({ socialSalesData }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const labels = Object.keys(socialSalesData);
  const dataValues = Object.values(socialSalesData);
  const numericDataValues = dataValues.map((value) =>
    parseFloat(value.replace("$ ", ""))
  );
  const data = {
    labels: labels,
    datasets: [
      {
        data: numericDataValues,
        backgroundColor: ["red", "blue", "green", "purple", "orange"], // You can customize the colors as needed
      },
    ],
  };

  const options = {
    responsive: true,
  };
  return (
    <div className="mt-5">
      <p className="text-start fs-6">Social Sales</p>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SocialSales;
