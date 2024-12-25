import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const data = {
    labels: ["Income", "Expenses"],
    datasets: [ 
      {
        data: [income, expense],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#388e3c", "#d32f2f"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Budget Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default BudgetChart;
