// controllers/taskReportController.js
const Task = require('../models/Task');
const { Parser } = require('json2csv');

// Generate Task Summary Report
exports.getTaskReport = async (req, res) => {
    try {
        const tasks = await Task.find(req.query).populate('assignedUser');
        const fields = ['title', 'description', 'dueDate', 'status', 'priority', 'assignedUser.name'];
        const parser = new Parser({ fields });
        const csv = parser.parse(tasks);
        res.header('Content-Type', 'text/csv');
        res.attachment('task-report.csv');
        res.status(200).send(csv);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
