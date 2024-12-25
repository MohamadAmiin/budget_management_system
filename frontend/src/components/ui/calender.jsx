import React, { useState } from 'react';

export function Calendar({ mode, selected, onSelect, className }) {
  const [date, setDate] = useState(selected);

  const handleDateChange = (newDate) => {
    if (mode === 'range') {
      if (!date.start || date.end) {
        setDate({ start: newDate, end: null });
      } else {
        setDate((prev) => ({ ...prev, end: newDate }));
        onSelect({ start: date.start, end: newDate });
      }
    }
  };

  return (
    <div className={className}>
      <input
        type="date"
        value={date.start ? date.start : ''}
        onChange={(e) => handleDateChange(e.target.value)}
      />
      {mode === 'range' && date.start && (
        <input
          type="date"
          value={date.end ? date.end : ''}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      )}
    </div>
  );
}
