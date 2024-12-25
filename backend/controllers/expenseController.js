const expenseSchema = require("../models/Expense");

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { description, amount, category, paymentMethod } = req.body;

    // Create the expense
    const expense = new expenseSchema({ description, amount, category, paymentMethod });
    await expense.save();

    res.status(201).json({ message: "Expense created successfully", expense });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error creating expense", error });
  }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await expenseSchema.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

// Get a single expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await expenseSchema.findById(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const expense = await expenseSchema.findByIdAndUpdate(id, updates, { new: true });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense updated successfully", expense });
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await expenseSchema.findByIdAndDelete(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  } 
};
