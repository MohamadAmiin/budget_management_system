import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";

const BudgetAllocation = ({ budgets, onReallocate }) => {
  const [reallocationData, setReallocationData] = useState({
    fromCategory: "",
    toCategory: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  // Validate reallocation form
  const validateForm = () => {
    const errors = {};
    if (!reallocationData.fromCategory) errors.fromCategory = "Please select a category to reallocate from.";
    if (!reallocationData.toCategory) errors.toCategory = "Please select a category to reallocate to.";
    if (!reallocationData.amount || isNaN(reallocationData.amount) || reallocationData.amount <= 0) {
      errors.amount = "Amount must be a positive number.";
    }
    return errors;
  };

  // Handle form submission for reallocating
  const handleReallocationSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      onReallocate(reallocationData); // Pass the reallocation data to parent
      setReallocationData({ fromCategory: "", toCategory: "", amount: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReallocationData({ ...reallocationData, [name]: value });
  };

  return (
    <div className="space-y-6 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-medium">Budget Allocation and Reallocation</h2>
      
      {/* Form for reallocating funds */}
      <form onSubmit={handleReallocationSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium">From Category</label>
            <select
              name="fromCategory"
              value={reallocationData.fromCategory}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${errors.fromCategory ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select Category</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.category}>{budget.category}</option>
              ))}
            </select>
            {errors.fromCategory && <p className="text-red-500 text-sm">{errors.fromCategory}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">To Category</label>
            <select
              name="toCategory"
              value={reallocationData.toCategory}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${errors.toCategory ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select Category</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.category}>{budget.category}</option>
              ))}
            </select>
            {errors.toCategory && <p className="text-red-500 text-sm">{errors.toCategory}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              value={reallocationData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className={`w-full px-4 py-2 border rounded ${errors.amount ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>
        </div>
        <div className="mt-6">
          <Button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
            Reallocate Funds
          </Button>
        </div>
      </form>

      {/* Budget Table */}
      <div className="space-y-4 mt-6">
        <h3 className="text-lg font-medium">Current Budget</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Allocated Amount</TableHead>
              <TableHead>Remaining Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {budgets.map((budget) => (
              <TableRow key={budget.id}>
                <TableCell>{budget.category}</TableCell>
                <TableCell>${budget.allocatedAmount.toFixed(2)}</TableCell>
                <TableCell>${budget.remainingAmount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BudgetAllocation;
