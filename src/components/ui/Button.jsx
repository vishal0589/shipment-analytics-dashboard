// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'md', className, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'text-gray-700 bg-transparent border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
  };

  const sizes = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
