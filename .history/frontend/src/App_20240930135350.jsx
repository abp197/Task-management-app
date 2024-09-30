import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateTask from './components/Tasks/CreateTask';
import TaskList from './components/Tasks/';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/tasks/create" component={CreateTask} />
            <Route path="/tasks" component={TaskList} />
            <Route path="/" exact component={TaskList} />
          </Switch>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
