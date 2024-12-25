import React, { useState } from "react";

const BudgetCategory = ({ onAddCategory }) => {
  // State to manage form inputs
  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    allocatedAmount: "",
  });

  // State for error handling
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!categoryData.categoryName) errors.categoryName = "Category name is required.";
    if (!categoryData.allocatedAmount || isNaN(categoryData.allocatedAmount) || categoryData.allocatedAmount <= 0)
      errors.allocatedAmount = "Allocated amount should be a positive number.";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      onAddCategory(categoryData); // Callback to parent component
      setCategoryData({
        categoryName: "",
        allocatedAmount: "",
      }); // Reset form
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-bold mb-4">Add Budget Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium">Category Name</label>
            <input
              type="text"
              name="categoryName"
              value={categoryData.categoryName}
              onChange={handleChange}
              placeholder="Enter category name"
              className={`w-full px-4 py-2 border rounded ${
                errors.categoryName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.categoryName && (
              <p className="text-red-500 text-sm">{errors.categoryName}</p>
            )}
          </div>

          {/* Allocated Amount */}
          <div>
            <label className="block text-sm font-medium">Allocated Amount</label>
            <input
              type="number"
              name="allocatedAmount"
              value={categoryData.allocatedAmount}
              onChange={handleChange}
              placeholder="Enter allocated amount"
              className={`w-full px-4 py-2 border rounded ${
                errors.allocatedAmount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.allocatedAmount && (
              <p className="text-red-500 text-sm">{errors.allocatedAmount}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetCategory;
