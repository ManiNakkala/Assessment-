const Loan = require('../models/Loan');

exports.createLoan = async (req, res) => {
  try {
    const loan = new Loan({ ...req.body, shopkeeperId: req.user._id });
    await loan.save();
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getLoans = async (req, res) => {
  const loans = await Loan.find({ shopkeeperId: req.user._id });
  res.json(loans);
};