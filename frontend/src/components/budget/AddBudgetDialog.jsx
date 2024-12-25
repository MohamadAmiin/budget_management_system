import axios from "axios";
import React, { useState } from "react";

const AddBudgetDialog = ({ onAddBudget }) => {
  const [formData, setFormData] = useState({
    title: "",
    totalAmount: "",
    timePeriod: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successTimeout, setSuccessTimeout] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required.";
    if (!formData.totalAmount || isNaN(formData.totalAmount) || formData.totalAmount <= 0)
      errors.totalAmount = "Total amount should be a positive number.";
    if (!formData.timePeriod) errors.timePeriod = "Time period is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:9000/api/budgets", formData);
        console.log("Server response:", response.data);

        onAddBudget(response.data);
        setFormData({
          title: "",
          totalAmount: "",
          timePeriod: "",
        }); // Clear form fields

        setErrors({});
        setSuccessMessage("Budget created successfully!");

        // Clear any existing timeout and set a new one
        if (successTimeout) clearTimeout(successTimeout);
        const timeout = setTimeout(() => setSuccessMessage(""), 3000);
        setSuccessTimeout(timeout);
      } catch (error) {
        console.error("Error response data:", error.response?.data);
        // setErrors({ server: "Failed to create budget. Please try again later." });
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form validation errors:", formErrors); // Debug log
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined })); // Clear field-specific errors
    console.log("Updated form data:", { ...formData, [name]: value }); // Debug log
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-bold mb-4">Create Budget</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter budget title"
              className={`w-full px-4 py-2 border rounded ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          {/* Total Amount */}
          <div>
            <label className="block text-sm font-medium">Total Amount</label>
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              placeholder="Enter total budget amount"
              className={`w-full px-4 py-2 border rounded ${
                errors.totalAmount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.totalAmount && <p className="text-red-500 text-sm">{errors.totalAmount}</p>}
          </div>

          {/* Time Period */}
          <div>
            <label className="block text-sm font-medium">Time Period</label>
            <select
              name="timePeriod"
              value={formData.timePeriod}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.timePeriod ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Time Period</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
            {errors.timePeriod && <p className="text-red-500 text-sm">{errors.timePeriod}</p>}
          </div>
        </div>

        {/* Server Error */}
        {errors.server && (
          <p className="text-red-500 text-sm mt-4" aria-live="polite">
            {errors.server}
          </p>
        )}

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-sm mt-4" aria-live="polite">
            {successMessage}
          </p>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className={`bg-blue-500 text-white px-6 py-2 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Budget"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBudgetDialog;
