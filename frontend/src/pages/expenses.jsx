import { useState } from "react";
import { RecentExpenses } from "../components/expenses/RecentExpenses";
import { ExpenseHistory } from "../components/expenses/ExpenseHistory";
import AddExpense from "../components/expenses/AddExpense";
import BudgetAllocation from "../components/expenses/BudgetAllocation"; // Import the new BudgetAllocation component

export default function ExpensesPage() {
  // Maintain expenses and budgets state in the parent (ExpensesPage)
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([
    { id: 1, category: "Supplies", allocatedAmount: 500, remainingAmount: 500 },
    { id: 2, category: "Meals", allocatedAmount: 300, remainingAmount: 300 },
    { id: 3, category: "Travel", allocatedAmount: 1000, remainingAmount: 1000 },
    { id: 4, category: "Marketing", allocatedAmount: 700, remainingAmount: 700 },
  ]);

  // Function to add a new expense
  const handleAddExpense = (expenseData) => {
    console.log("Adding expense in parent:", expenseData); // Log the added expense
    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);

    // Deduct from the appropriate budget category based on the expense
    setBudgets((prevBudgets) => {
      return prevBudgets.map((budget) => {
        if (expenseData.category === budget.category) {
          budget.remainingAmount -= expenseData.amount;
        }
        return budget;
      });
    });
  };

  // Handle reallocation of funds between categories
  const handleReallocate = (reallocationData) => {
    setBudgets((prevBudgets) => {
      const updatedBudgets = prevBudgets.map((budget) => {
        if (budget.category === reallocationData.fromCategory) {
          budget.remainingAmount -= parseFloat(reallocationData.amount);
        }
        if (budget.category === reallocationData.toCategory) {
          budget.remainingAmount += parseFloat(reallocationData.amount);
        }
        return budget;
      });
      return updatedBudgets;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Pass expenses to RecentExpenses component */}
          <RecentExpenses expenses={expenses} />
        </div>

        {/* Pass the expenses and handleAddExpense as props to ExpenseHistory */}
        <ExpenseHistory expenses={expenses} />

        {/* Add new expense form */}
        <AddExpense onAddExpense={handleAddExpense} />

        {/* Budget Allocation and Reallocation Component */}
        {/* <BudgetAllocation budgets={budgets} onReallocate={handleReallocate} /> */}
      </main>
    </div>
  );
}
