// src/components/tabs/ReportsTab.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Download, FileText } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ReportsTab = ({ data }) => (
  <div className="space-y-4">
    {/* Generate Custom Report */}
    <Card>
      <CardHeader>
        <CardTitle>Generate Custom Report</CardTitle>
        <p className="text-sm text-gray-500">Configure and download detailed reports</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Select Filters */}
          <div className="flex gap-4">
            {/* Report Type */}
            <div className="relative">
              <select
                defaultValue="shipment"
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="shipment">Shipment Report</option>
                <option value="performance">Performance Report</option>
                <option value="cost">Cost Analysis Report</option>
                <option value="custom">Custom Report</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.516 7.548L10 12.031l4.484-4.483L16 8l-6 6-6-6z" />
                </svg>
              </div>
            </div>

            {/* Date Range */}
            <div className="relative">
              <select
                defaultValue="last30"
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="last7">Last 7 Days</option>
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.516 7.548L10 12.031l4.484-4.483L16 8l-6 6-6-6z" />
                </svg>
              </div>
            </div>

            {/* Generate Button */}
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Generate Report
            </Button>
          </div>

          {/* Report Preview */}
          <div className="mt-8 border rounded-lg p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Report Preview</h3>
                <Badge>Last Updated: 5 mins ago</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {data.reportMetrics.map((metric, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">{metric.label}</div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                  </div>
                ))}
              </div>
              {/* Report Trends Chart */}
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={data.reportTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Saved Reports */}
    <Card>
      <CardHeader>
        <CardTitle>Saved Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.savedReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <FileText className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">{report.name}</div>
                  <div className="text-sm text-gray-500">Generated on {report.date}</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ReportsTab;
