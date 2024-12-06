// src/components/ui/Select.jsx
import React from 'react';

const Select = ({ children, value, onChange, className }) => (
  <select
    value={value}
    onChange={onChange}
    className={`block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md ${className}`}
  >
    {children}
  </select>
);

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export { Select, SelectItem };
