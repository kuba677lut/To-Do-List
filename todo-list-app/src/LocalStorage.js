import { useEffect } from 'react';

function LocalStorage({ tasks, setTasks }) {
  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Loaded tasks from localStorage:', savedTasks);
    setTasks(savedTasks);
  }, [setTasks]);

  // Save tasks to localStorage whenever there's a change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Saved tasks to localStorage:', tasks);
  }, [tasks]);

  return null; // This component doesn't render anything
}
  
export default LocalStorage;
