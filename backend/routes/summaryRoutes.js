const express = require('express');
const { getSummary } = require('../controllers/summaryController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();
router.use(protect);

router.get('/', getSummary);

module.exports = router;