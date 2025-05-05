const express = require('express');
const { createLoan, getLoans } = require('../controllers/loanController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();
router.use(protect);

router.post('/', createLoan);
router.get('/', getLoans);

module.exports = router;