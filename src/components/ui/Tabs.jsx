// src/components/ui/Tabs.jsx
import React, { useState } from 'react';

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const modifiedChildren = React.Children.map(children, child => {
    if (child.type === TabsList) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    if (child.type === TabsContent) {
      return React.cloneElement(child, { activeTab });
    }
    return child;
  });

  return <div>{modifiedChildren}</div>;
};

export const TabsList = ({ children, activeTab, setActiveTab, className }) => (
  <div className={`flex space-x-1 ${className}`}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

export const TabsTrigger = ({ value, children, activeTab, setActiveTab, className }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-4 py-2 rounded-md focus:outline-none transition-colors duration-200 ${
      activeTab === value
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    } ${className}`}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children, activeTab }) => {
  if (value !== activeTab) return null;
  return <div className="mt-4">{children}</div>;
};
