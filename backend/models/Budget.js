// models/Budget.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  allocatedAmount: { type: Number, default: 0 }
});

const budgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  remainingAmount: { type: Number, required: true },
  timePeriod: { type: String, enum: ['Monthly', 'Quarterly', 'yearly'], required: true },
  categories: [categorySchema],
  status: { type: String, enum: ['pending', 'approved'], default: 'approved' } 
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;