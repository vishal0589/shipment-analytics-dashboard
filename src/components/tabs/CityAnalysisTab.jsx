// src/components/tabs/CityAnalysisTab.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { MapPin, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CityAnalysisTab = ({ data }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Top Performing City */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing City</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.topCity}</div>
          <div className="text-sm text-gray-500">{data.topCityShipments.toLocaleString()} shipments</div>
          <div className="mt-2 text-green-500 text-sm">+12% growth</div>
        </CardContent>
      </Card>

      {/* Best Delivery Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Best Delivery Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.bestPerformingCity}</div>
          <div className="text-sm text-gray-500">{data.bestPerformanceRate}% on-time</div>
        </CardContent>
      </Card>
    </div>

    {/* City-wise Performance */}
    <Card>
      <CardHeader>
        <CardTitle>City-wise Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data.cityPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="shipments" fill="#8884d8" name="Shipments" />
            <Bar dataKey="onTime" fill="#82ca9d" name="On-Time %" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

export default CityAnalysisTab;
