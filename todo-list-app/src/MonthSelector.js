import React from 'react';

const MonthSelector = ({ selectedMonth, onMonthSelect }) => {
  const months = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień',
    'Maj', 'Czerwiec', 'Lipiec', 'Sierpień',
    'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ];

  return (
    <div className="month-selector">
      <label htmlFor="month-dropdown">Select a Month: </label>
      <select
        id="month-dropdown"
        value={selectedMonth}
        onChange={(e) => onMonthSelect(e.target.value)}
      >
        <option value="">Wybierz</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
