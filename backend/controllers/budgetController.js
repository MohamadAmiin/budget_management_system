const Budget = require('../models/Budget');

const createBudget = async (req, res) => {
  try {
    const { title, totalAmount, timePeriod } = req.body;

    if (!title || !totalAmount || !timePeriod) {
      return res.status(400).json({ message: 'Title, total amount, and time period are required' });
    }

    const budget = new Budget({
      title,
      totalAmount,
      remainingAmount: totalAmount,
      timePeriod,
    });

    await budget.save();
    res.status(201).json({ message: 'Budget created successfully', budget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBudget };
