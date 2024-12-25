import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardOverview = () => {
  const [totalAmount, setTotalAmount] = useState(0); // State for total income
  const [amount, setAmount] = useState(""); // State for expense amount
  const [description, setDescription] = useState(""); // State for expense description
  const [category, setCategory] = useState(""); // State for expense category
  const [paymentMethod, setPaymentMethod] = useState(""); // State for payment method

  // Fetch total income from backend
  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/budgets/totalAmount"); // Replace with actual endpoint
        setTotalAmount(response.data.totalAmount || 0); // Handle response gracefully
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };

    fetchTotalAmount();
  }, []);

  // Handle form submission for creating a new expense
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/expense", {
        description,
        category,
        amount,
        paymentMethod,
      });
      alert("Expense created successfully");
      console.log("Response:", response.data);
      setAmount(""); // Clear form fields
      setDescription("");
      setCategory("");
      setPaymentMethod("");
    } catch (error) {
      console.error("Error creating expense:", error);
    }
  };

  // Line chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis labels
    datasets: [
      {
        label: "Monthly Expense",
        data: [1200, 1500, 1700, 1600, 1800, 1300, 1400], // Dummy Y-axis data
        fill: false, // No fill below the line
        borderColor: "rgb(75, 192, 192)", // Line color
        tension: 0.1, // Line smoothness
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Expense Tracking (2024)",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg text-gray-700">Total Income</h3>
          <p className="text-xl text-gray-800">${5000}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg text-gray-700">Total Expense</h3>
          <p className="text-xl text-gray-800">${200|| "0"}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg text-gray-700">Savings</h3>
          <p className="text-xl text-gray-800">$5,000</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg text-gray-700">Debt</h3>
          <p className="text-xl text-gray-800">$2,000</p>
        </div>
      </div>

      {/* Line Graph */}
      <div className="mb-8">
        <Line data={data} options={options} />
      </div>

      {/* Expense Form */}
      <form className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md" onSubmit={handleRegister}>
        <h3 className="font-semibold text-lg text-gray-700 mb-4">Add New Expense</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default DashboardOverview;
