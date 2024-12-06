// src/components/tabs/VolumeAnalysisTab.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Package, BarChart as BarChartIcon, ArrowUp } from 'lucide-react';
import Button from '../ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VolumeAnalysisTab = ({ data }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Total Volume */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
          <Package className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalVolume.toLocaleString()} kg</div>
          <p className="text-xs text-green-500 flex items-center">
            <ArrowUp className="h-4 w-4 mr-1" /> +8% from last month
          </p>
        </CardContent>
      </Card>

      {/* Average Per Day */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Per Day</CardTitle>
          <BarChartIcon className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.avgDailyVolume.toLocaleString()} kg</div>
          <p className="text-xs text-gray-500">Daily average</p>
        </CardContent>
      </Card>
    </div>

    {/* Volume Distribution by Mode */}
    <Card>
      <CardHeader>
        <CardTitle>Volume Distribution by Mode</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data.volumeByMode}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mode" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="volume" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

export default VolumeAnalysisTab;
