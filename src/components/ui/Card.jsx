// src/components/ui/Card.jsx
import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow rounded-lg ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`px-4 py-2 border-b ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-500 ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);
