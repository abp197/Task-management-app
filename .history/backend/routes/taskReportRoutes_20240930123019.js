// routes/taskReportRoutes.js
const express = require('express');
const { getTaskReport } = require('../controllers/taskReportController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/report', protect, getTaskReport);

module.exports = router;
