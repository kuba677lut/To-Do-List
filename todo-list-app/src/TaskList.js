import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div
    className="task-item"
    >
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              color: task.completed ? 'green' : '',
              fontWeight: task.priority === 'High' ? 'bold' : 'normal',
            }}
          >
            <span
              onClick={() => toggleTask(index)}
            >
              {task.title} 
              <br></br>
              - {task.content}
            </span>
            <br></br>
            <button onClick={() => deleteTask(index)}>Usuń {task.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
