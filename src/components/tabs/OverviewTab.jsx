// src/components/tabs/OverviewTab.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, BarChart, Bar } from 'recharts';

const OverviewTab = ({ data }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Shipment Status Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Shipment Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.statusDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.statusDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Volume Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Volume Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.volumeTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="surface" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="air" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="hand" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>

    {/* Performance Metrics */}
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.performanceMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

export default OverviewTab;
