const mongoose = require('mongoose');

const repaymentSchema = new mongoose.Schema({
  shopkeeperId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
  amount: Number,
  date: Date
}, { timestamps: true });

module.exports = mongoose.model('Repayment', repaymentSchema);