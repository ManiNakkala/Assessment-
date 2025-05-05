const Repayment = require('../models/Repayment');
const Loan = require('../models/Loan');

exports.recordRepayment = async (req, res) => {
  const { loanId, amount, date } = req.body;

  const loan = await Loan.findOne({ _id: loanId, shopkeeperId: req.user._id });
  if (!loan) return res.status(404).json({ message: 'Loan not found' });

  const repayment = new Repayment({ loanId, amount, date, shopkeeperId: req.user._id });
  await repayment.save();

  loan.amount -= amount;
  if (loan.amount <= 0) loan.status = 'paid';
  await loan.save();

  res.status(201).json(repayment);
};