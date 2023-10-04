import React from 'react';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className='button' onClick={toggleDarkMode}>
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default DarkModeButton;