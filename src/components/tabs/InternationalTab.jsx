// src/components/tabs/InternationalTab.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Globe, Plane } from 'lucide-react';
import StatusBadge from '../ui/StatusBadge';
import Button from '../ui/Button';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const InternationalTab = ({ data }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Active International Shipments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active International</CardTitle>
          <Globe className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.activeInternational}</div>
          <p className="text-xs text-gray-500">Across {data.countries} countries</p>
        </CardContent>
      </Card>

      {/* Customs Status */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Customs Status</CardTitle>
          <Plane className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.customsClearance}%</div>
          <p className="text-xs text-gray-500">Clearance rate</p>
        </CardContent>
      </Card>
    </div>

    {/* International Shipments */}
    <Card>
      <CardHeader>
        <CardTitle>International Shipments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b">
            <div>Tracking ID</div>
            <div>Destination</div>
            <div>Status</div>
            <div>Customs</div>
            <div>ETA</div>
            <div>Actions</div>
          </div>
          {/* Table Rows */}
          <div className="divide-y">
            {data.internationalShipments.map((shipment) => (
              <div key={shipment.id} className="grid grid-cols-6 gap-4 p-4 items-center">
                <div className="font-medium">{shipment.id}</div>
                <div>{shipment.destination}</div>
                <StatusBadge status={shipment.status} />
                <StatusBadge status={shipment.customs} />
                <div>{shipment.eta}</div>
                <Button variant="outline" size="sm">
                  Track
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default InternationalTab;
