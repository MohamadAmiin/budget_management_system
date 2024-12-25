import React from "react";

export const CategoryWiseSpending = ({ expenses }) => {
  // Calculate total spending per category
  const categorySpending = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  return (
    <div className="space-y-6 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-medium">Category-wise Spending</h2>
      <ul>
        {Object.entries(categorySpending).map(([category, totalSpending]) => (
          <li key={category} className="py-2">
            <span className="font-semibold">{category}:</span>
            <span className="ml-2">${totalSpending.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
