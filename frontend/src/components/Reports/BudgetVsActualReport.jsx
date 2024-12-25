import React from "react";

export const BudgetVsActualReport = ({ budgets, expenses }) => {
  // Calculate actual expenses for each category
  const calculateActualExpenses = (category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((acc, expense) => acc + expense.amount, 0);
  };

  return (
    <div className="space-y-6 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-medium">Budget vs Actual Report</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Category</th>
            <th className="border p-2">Allocated Budget</th>
            <th className="border p-2">Actual Expenses</th>
            <th className="border p-2">Variance</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => {
            const actualExpenses = calculateActualExpenses(budget.category);
            const variance = budget.allocatedAmount - actualExpenses;
            return (
              <tr key={budget.category}>
                <td className="border p-2">{budget.category}</td>
                <td className="border p-2">${budget.allocatedAmount.toFixed(2)}</td>
                <td className="border p-2">${actualExpenses.toFixed(2)}</td>
                <td className={`border p-2 ${variance < 0 ? "text-red-500" : "text-green-500"}`}>
                  ${variance.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
