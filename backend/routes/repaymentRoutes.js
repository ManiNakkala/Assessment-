const express = require('express');
const { recordRepayment } = require('../controllers/repaymentController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();
router.use(protect);

router.post('/', recordRepayment);

module.exports = router;