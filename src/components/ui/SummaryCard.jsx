// src/components/ui/SummaryCard.jsx
import React from 'react';
import { Card, CardContent } from './Card';

const SummaryCard = ({ title, value, icon }) => (
  <Card className="flex items-center p-4">
    <div className="p-3 bg-blue-100 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </Card>
);

export default SummaryCard;
