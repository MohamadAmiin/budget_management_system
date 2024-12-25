import { useState, useEffect } from "react";
import { BudgetVsActualReport } from "../components/Reports/BudgetVsActualReport";
import { CategoryWiseSpending } from "../components/Reports/CategoryWiseSpending";
import { ForecastingReport } from "../components/Reports/ForecastingReport";

export default function ReportsPage() {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([
    { category: "Supplies", allocatedAmount: 500 },
    { category: "Meals", allocatedAmount: 300 },
    { category: "Travel", allocatedAmount: 1000 },
    { category: "Marketing", allocatedAmount: 700 },
  ]);

  // Example data fetch function, could be replaced with API call
  useEffect(() => {
    // Simulating fetching expenses data
    setExpenses([
      { category: "Supplies", amount: 200, date: "2024-12-01" },
      { category: "Meals", amount: 100, date: "2024-12-05" },
      { category: "Travel", amount: 600, date: "2024-12-10" },
      { category: "Marketing", amount: 300, date: "2024-12-12" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 space-y-6">
        <div className="space-y-6">
          {/* Budget vs Actual Report */}
          <BudgetVsActualReport budgets={budgets} expenses={expenses} />

          {/* Category-wise Spending Report */}
          <CategoryWiseSpending expenses={expenses} />

          {/* Forecasting Report */}
          <ForecastingReport expenses={expenses} />
        </div>
      </main>
    </div>
  );
}
