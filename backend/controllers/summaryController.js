const Loan = require('../models/Loan');
const Repayment = require('../models/Repayment');

exports.getSummary = async (req, res) => {
  const loans = await Loan.find({ shopkeeperId: req.user._id });
  const repayments = await Repayment.find({ shopkeeperId: req.user._id });

  const totalLoaned = loans.reduce((sum, l) => sum + l.amount, 0);
  const totalCollected = repayments.reduce((sum, r) => sum + r.amount, 0);
  const overdueAmount = loans.filter(l => l.status === 'overdue').reduce((sum, l) => sum + l.amount, 0);

  res.json({ totalLoaned, totalCollected, overdueAmount });
};