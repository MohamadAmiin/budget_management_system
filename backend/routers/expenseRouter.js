const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

// Route to create a new expense
router.post("/", expenseController.createExpense);

// Route to get all expenses
router.get("/read", expenseController.getExpenses);

// Route to get a single expense by ID
router.get("/readOne/:id", expenseController.getExpenseById);

// Route to update an expense by ID
router.put("/update/:id", expenseController.updateExpense);

// Route to delete an expense by ID
router.delete("/delete/:id", expenseController.deleteExpense);

module.exports = router;
