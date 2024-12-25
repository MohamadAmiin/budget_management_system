import React from "react";

export const ForecastingReport = ({ expenses }) => {
  // Forecast future spending based on historical data (simple calculation)
  const forecastFutureSpending = () => {
    const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const averageDailySpending = totalSpent / expenses.length;
    const forecastedSpending = averageDailySpending * 30; // Predict for the next 30 days
    return forecastedSpending;
  };

  const forecast = forecastFutureSpending();

  return (
    <div className="space-y-6 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-medium">Forecasting Report</h2>
      <div className="py-4">
        <p className="font-semibold">Predicted spending for the next 30 days:</p>
        <p className="text-xl">${forecast.toFixed(2)}</p>
      </div>
    </div>
  );
};
