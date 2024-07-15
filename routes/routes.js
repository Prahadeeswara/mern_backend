const express = require('express');
const Task = require('../models/models'); // Correct relative path
const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching tasks' });
    }
});

// POST a new task
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while saving the task' });
    }
});

// PUT to update a task by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while updating the task' });
    }
});

// DELETE a task by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.json(deletedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the task' });
    }
});

module.exports = router;
