import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tytuł"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Zawartość"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br></br>
      <button className='button' type="submit">Dodaj Zadanie</button>
    </form>
  );
};

export default TaskForm;
