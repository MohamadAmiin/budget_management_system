const Category = require('../models/Category');
const Budget = require('../models/Budget');

const createCategory = async (req, res) => {
  try {
    const { budgetId, name, amount } = req.body;

    if (!budgetId || !name || amount == null) {
      return res.status(400).json({ message: 'Budget ID, name, and amount are required' });
    }

    const budget = await Budget.findById(budgetId);
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    if (amount > budget.remainingAmount) {
      return res.status(400).json({ message: 'Insufficient funds in the budget' });
    }

    const category = new Category({ name, amount, budgetId });
    await category.save();

    budget.remainingAmount -= amount;
    await budget.save();

    res.status(201).json({
      message: 'Category created and budget updated successfully',
      category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategory };
