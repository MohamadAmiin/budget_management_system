import React from 'react';

export function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
    />
  );
}
