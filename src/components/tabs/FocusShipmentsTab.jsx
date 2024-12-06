// src/components/tabs/FocusShipmentsTab.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import StatusBadge from '../ui/StatusBadge';
import { AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const FocusShipmentsTab = ({ data }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Focus Shipments Count */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Focus Shipments</CardTitle>
          <AlertCircle className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.focusCount}</div>
          <p className="text-xs text-gray-500">Requiring attention</p>
        </CardContent>
      </Card>

      {/* Average Delay */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Delay</CardTitle>
          <Clock className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.avgDelay} days</div>
          <p className="text-xs text-gray-500">Across delayed shipments</p>
        </CardContent>
      </Card>

      {/* Resolution Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.resolutionRate}%</div>
          <p className="text-xs text-gray-500">Last 7 days</p>
        </CardContent>
      </Card>
    </div>

    {/* Focus Shipments Details */}
    <Card>
      <CardHeader>
        <CardTitle>Focus Shipments Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 p-4 bg-gray-50 border-b">
            <div>ID</div>
            <div>Customer</div>
            <div>Status</div>
            <div>Issue</div>
            <div>Delayed By</div>
            <div>Priority</div>
            <div>Actions</div>
          </div>
          {/* Table Rows */}
          <div className="divide-y">
            {data.focusShipments.map((shipment) => (
              <div key={shipment.id} className="grid grid-cols-7 gap-4 p-4 items-center">
                <div className="font-medium">{shipment.id}</div>
                <div>{shipment.customer}</div>
                <StatusBadge status={shipment.status} />
                <div>{shipment.issue}</div>
                <div>{shipment.delayDays} days</div>
                <StatusBadge status={shipment.priority} />
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default FocusShipmentsTab;
