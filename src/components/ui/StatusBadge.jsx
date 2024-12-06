// src/components/ui/StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ status }) => {
  const colors = {
    'Delivered': 'bg-green-100 text-green-800',
    'In Transit': 'bg-blue-100 text-blue-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Delayed': 'bg-red-100 text-red-800',
    'High': 'bg-red-100 text-red-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Low': 'bg-green-100 text-green-800',
    'Cleared': 'bg-green-100 text-green-800',
    'On-Time': 'bg-green-100 text-green-800',
    // Add more statuses as needed
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
