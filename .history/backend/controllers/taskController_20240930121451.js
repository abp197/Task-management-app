// controllers/taskController.js
const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res) => {
    const { title, description, dueDate, priority, assignedUser } = req.body;
    try {
        const task = await Task.create({ 
            title, 
            description, 
            dueDate, 
            priority, 
            assignedUser, 
            createdBy: req.user.userId 
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get User Tasks
exports.getTasks = async (req, res) => {
    const query = { $or: [{ createdBy: req.user.userId }, { assignedUser: req.user.userId }] };
    try {
        const tasks = await Task.find(query).populate('assignedUser');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
