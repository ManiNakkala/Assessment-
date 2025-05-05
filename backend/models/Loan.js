const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  shopkeeperId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  itemDescription: String,
  amount: Number,
  issueDate: Date,
  dueDate: Date,
  frequency: String,
  interestPercent: Number,
  graceDays: Number,
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);