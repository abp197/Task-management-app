import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  const createTask = async (taskData) => {
    await axios.post('/api/tasks', taskData);
    fetchTasks(); // refresh tasks after creating a new one
  };

  const updateTask = async (id, updatedData) => {
    await axios.put(`/api/tasks/${id}`, updatedData);
    fetchTasks(); // refresh tasks after updating
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    fetchTasks(); // refresh tasks after deleting
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
