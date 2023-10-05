import React from 'react';

const MonthIndicator = ({ selectedMonth }) => {
  return (
    <div className="month-indicator">
      {selectedMonth ? (
        <p>Wybrany mieciąc: {selectedMonth}</p>
      ) : (
        <p>Wybrany mieciąc:</p>
      )}
    </div>
  );
};

export default MonthIndicator;
