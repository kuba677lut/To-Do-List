import { useEffect } from 'react';

function LocalStorage({ tasks, setTasks }) {
  // Load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Loaded tasks from localStorage:', savedTasks);
    setTasks(savedTasks);
  }, [setTasks]);

  // Save
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Saved tasks to localStorage:', tasks);
  }, [tasks]);

  return null;
}
  
export default LocalStorage;
