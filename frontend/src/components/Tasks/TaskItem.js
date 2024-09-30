import React from 'react';
import { useTasks } from '../../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      {/* You can add update functionality here */}
    </div>
  );
};

export default TaskItem;
