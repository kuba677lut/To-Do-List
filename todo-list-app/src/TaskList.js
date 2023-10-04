import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="task-item"
            style={{ borderColor: task.completed ? 'green' : 'black',
            boxShadow: task.completed ? 'green' : 'black' }}
          >
            <button className='button' onClick={() => deleteTask(index)}>usuń</button>
            <div className="task-content">
              <span onClick={() => toggleTask(index)}>
                {task.completed ? '✔ ' : '◻ '}
              </span>
              {task.title} <br></br> {task.content}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
