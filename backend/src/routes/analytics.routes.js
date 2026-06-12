const express = require('express');
const router = express.Router();

const {
  getMonthlyAnalytics
} = require('../controllers/analytics.controller');

router.get('/monthly', getMonthlyAnalytics);

module.exports = router;