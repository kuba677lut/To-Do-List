import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import LocalStorage from './LocalStorage';
import './App.css';
import DarkModeButton from './DarkModeButton';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [darkMode, setDarkMode] = useState(false); // Add dark mode state

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setIsLoading(false); // Set loading to false once tasks are loaded
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(updatedTasks);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Todo List</h1>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Include the LocalStorage component */}
          <LocalStorage tasks={tasks} setTasks={setTasks} />
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
      )}
    </div>
  );
}

export default App;
