// src/components/ui/Input.jsx
import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
  />
);

export default Input;
