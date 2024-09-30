import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

const CreateTask = () => {
  const { createTask } = useTasks();
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'To Do',
    priority: 'Medium',
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(taskData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        onChange={handleChange}
        required
      />
      <select name="status" onChange={handleChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
