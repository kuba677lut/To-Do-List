import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import LocalStorage from './LocalStorage';
import './App.css';
import DarkModeButton from './DarkModeButton';
import MonthSelector from './MonthSelector';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [tasksByMonth, setTasksByMonth] = useState({});

  useEffect(() => {
    const savedTasksByMonth = JSON.parse(localStorage.getItem('tasksByMonth')) || {};
    setTasksByMonth(savedTasksByMonth);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedMonth) {
      setTasks(tasksByMonth[selectedMonth] || []);
    }
  }, [selectedMonth, tasksByMonth]);

  const addTask = (task) => {
    const updatedTasksByMonth = { ...tasksByMonth };
    if (!updatedTasksByMonth[selectedMonth]) {
      updatedTasksByMonth[selectedMonth] = [];
    }
    updatedTasksByMonth[selectedMonth].push({ ...task, completed: false });
    setTasksByMonth(updatedTasksByMonth);
    localStorage.setItem('tasksByMonth', JSON.stringify(updatedTasksByMonth));
  };
  

  const toggleTask = (index) => {
    const updatedTasksByMonth = { ...tasksByMonth };
    updatedTasksByMonth[selectedMonth][index].completed = !updatedTasksByMonth[selectedMonth][index].completed;
    setTasksByMonth(updatedTasksByMonth);
    localStorage.setItem('tasksByMonth', JSON.stringify(updatedTasksByMonth));
  };

  const deleteTask = (index) => {
    const updatedTasksByMonth = { ...tasksByMonth };
    updatedTasksByMonth[selectedMonth].splice(index, 1);
    setTasksByMonth(updatedTasksByMonth);
    localStorage.setItem('tasksByMonth', JSON.stringify(updatedTasksByMonth));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  const onMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>To-do List</h1>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MonthSelector selectedMonth={selectedMonth} onMonthSelect={onMonthSelect} />
      {isLoading ? (
        <p>Ładowanie...</p>
      ) : selectedMonth ? (
        <>
          <LocalStorage tasks={tasks} setTasks={setTasks} selectedMonth={selectedMonth} />
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
      ) : (
        <p>Wybierz miesiąc, aby utworzyć listę rzeczy do zrobienia</p>
      )}
    </div>
  );
}

export default App;
