// src/components/MainDashboard.jsx
import React, { useState, useMemo } from 'react';
import SummaryCard from './ui/SummaryCard';
import StatusBadge from './ui/StatusBadge';
import OverviewTab from './tabs/OverviewTab';
import FocusShipmentsTab from './tabs/FocusShipmentsTab';
import InternationalTab from './tabs/InternationalTab';
import VolumeAnalysisTab from './tabs/VolumeAnalysisTab';
import CityAnalysisTab from './tabs/CityAnalysisTab';
import ReportsTab from './tabs/ReportsTab';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs';
import { Select, SelectItem } from './ui/Select';
import Input from './ui/Input';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { Package, TrendingUp, Globe, Clock, AlertCircle, Download, Search, Filter, MapPin, CheckCircle2, DollarSign, BarChart as BarChartIcon, FileText, Plane, ArrowUp, ArrowDown, Timer } from 'lucide-react';

const MainDashboard = () => {
  // Main state management
  const [dateFilter, setDateFilter] = useState('monthly');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for the entire dashboard
  const dashboardData = useMemo(() => ({
    summary: {
      totalShipments: 15784,
      activeShipments: 2458,
      onTimeDelivery: 94,
      totalCost: 12520000,
    },
    statusDistribution: [
      { name: 'Delivered', value: 4000, color: '#00C49F' },
      { name: 'In Transit', value: 3000, color: '#0088FE' },
      { name: 'Pending', value: 2000, color: '#FFBB28' },
      { name: 'Delayed', value: 1500, color: '#FF8042' },
    ],
    volumeTrends: [
      { month: 'Jan', surface: 2400, air: 2400, hand: 2400 },
      { month: 'Feb', surface: 1398, air: 2210, hand: 2290 },
      { month: 'Mar', surface: 9800, air: 2290, hand: 2000 },
      { month: 'Apr', surface: 3908, air: 2000, hand: 2181 },
      { month: 'May', surface: 4800, air: 2290, hand: 2500 },
      { month: 'Jun', surface: 3490, air: 2000, hand: 2100 },
      // Add more data as needed
    ],
    performanceMetrics: [
      { name: 'Efficiency', value: 85 },
      { name: 'Accuracy', value: 90 },
      { name: 'Reliability', value: 80 },
    ],
    focusShipments: {
      focusCount: 42,
      avgDelay: 2.5,
      resolutionRate: 85,
      focusShipments: [
        { id: 'SHP001', customer: 'ABC Corp', status: 'Delayed', issue: 'Address Incomplete', delayDays: 3, priority: 'High' },
        { id: 'SHP002', customer: 'XYZ Ltd', status: 'Pending', issue: 'Payment Pending', delayDays: 1, priority: 'Medium' },
        { id: 'SHP003', customer: 'LMN Inc', status: 'Delayed', issue: 'Customs Hold', delayDays: 4, priority: 'High' },
        // Add more shipments as needed
      ],
    },
    international: {
      activeInternational: 420,
      countries: 28,
      customsClearance: 92,
      internationalShipments: [
        { id: 'INT001', destination: 'Singapore', status: 'In Transit', customs: 'Cleared', eta: '2024-12-10' },
        { id: 'INT002', destination: 'Germany', status: 'Pending', customs: 'Under Review', eta: '2024-12-15' },
        { id: 'INT003', destination: 'USA', status: 'In Transit', customs: 'Cleared', eta: '2024-12-12' },
        // Add more shipments as needed
      ],
    },
    volume: {
      totalVolume: 125000,
      avgDailyVolume: 4167,
      volumeByMode: [
        { mode: 'Surface', volume: 75000 },
        { mode: 'Air', volume: 35000 },
        { mode: 'Hand', volume: 15000 },
      ],
    },
    cityAnalysis: {
      topCity: 'Delhi',
      topCityShipments: 2500,
      bestPerformingCity: 'Bangalore',
      bestPerformanceRate: 95,
      cityPerformance: [
        { city: 'Delhi', shipments: 2500, onTime: 94 },
        { city: 'Mumbai', shipments: 2200, onTime: 92 },
        { city: 'Bangalore', shipments: 1800, onTime: 95 },
        { city: 'Chennai', shipments: 1500, onTime: 90 },
        { city: 'Kolkata', shipments: 1300, onTime: 88 },
        // Add more cities as needed
      ],
    },
    reports: {
      reportMetrics: [
        { label: 'Total Shipments', value: '8,547' },
        { label: 'Total Volume', value: '42,735 kg' },
        { label: 'Total Cost', value: '₹8.2M' },
      ],
      savedReports: [
        { name: 'Monthly Performance Report', date: '2024-12-01' },
        { name: 'Q4 Cost Analysis', date: '2024-11-30' },
        { name: 'Weekly Shipment Summary', date: '2024-12-04' },
        // Add more reports as needed
      ],
      reportTrends: [
        { date: '2024-11-01', value: 400 },
        { date: '2024-11-08', value: 300 },
        { date: '2024-11-15', value: 500 },
        { date: '2024-11-22', value: 600 },
        { date: '2024-11-29', value: 700 },
        { date: '2024-12-06', value: 800 },
      ],
    },
  }), []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-white border-b">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Shipment Analytics Dashboard</h1>
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search shipments..."
                className="pl-8 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Date Filter */}
            <Select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="w-32">
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SummaryCard
            title="Total Shipments"
            value={dashboardData.summary.totalShipments}
            icon={<Package className="h-6 w-6 text-blue-500" />}
          />
          <SummaryCard
            title="Active Shipments"
            value={dashboardData.summary.activeShipments}
            icon={<TrendingUp className="h-6 w-6 text-green-500" />}
          />
          <SummaryCard
            title="On-Time Delivery"
            value={`${dashboardData.summary.onTimeDelivery}%`}
            icon={<CheckCircle2 className="h-6 w-6 text-green-500" />}
          />
          <SummaryCard
            title="Total Cost"
            value={`₹${(dashboardData.summary.totalCost / 1_000_000).toFixed(1)}M`} // Updated Value
            icon={<span className="h-6 w-6 text-red-500">&#8377;</span>}
          />
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="overview">
          <TabsList className="flex space-x-1 bg-gray-200 p-1 rounded-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="focus">Focus Shipments</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="volume">Volume Analysis</TabsTrigger>
            <TabsTrigger value="city">City Analysis</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="overview">
            <OverviewTab data={dashboardData} />
          </TabsContent>
          <TabsContent value="focus">
            <FocusShipmentsTab data={dashboardData.focusShipments} />
          </TabsContent>
          <TabsContent value="international">
            <InternationalTab data={dashboardData.international} />
          </TabsContent>
          <TabsContent value="volume">
            <VolumeAnalysisTab data={dashboardData.volume} />
          </TabsContent>
          <TabsContent value="city">
            <CityAnalysisTab data={dashboardData.cityAnalysis} />
          </TabsContent>
          <TabsContent value="reports">
            <ReportsTab data={dashboardData.reports} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainDashboard;
