import React from "react";
import AddBudgetDialog from "../components/budget/AddBudgetDialog"; // Adjust the import path as needed
import BudgetCategory from "../components/budget/BudgetCategory"; // Adjust the import path as needed

const Budget = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Budget</h2>

      {/* Directly display the AddBudgetDialog component */}
      <AddBudgetDialog />

      {/* Budget Categories Section */}
      <div className="mt-6">
        {/* <h3 className="text-xl font-semibold">Budget Categories</h3> */}
        {/* <BudgetCategory /> */}
      </div>
    </div>
  );
};

export default Budget;
