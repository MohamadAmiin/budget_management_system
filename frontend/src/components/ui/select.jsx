// src/components/ui/Select.jsx

import React from 'react';

export const Select = ({ value, onValueChange, children }) => {
  return (
    <div className="relative">
      <select 
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="block w-full p-2 border rounded-md"
      >
        {children}
      </select>
    </div>
  );
};

export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
export const SelectTrigger = ({ children }) => (
  <div className="flex justify-between p-2 bg-gray-100 rounded-md">{children}</div>
);
export const SelectValue = ({ placeholder }) => (
  <span className="text-gray-500">{placeholder}</span>
);
