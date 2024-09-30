import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/" element={<TaskList />} />
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
