import React from 'react';
import { Clock, Shield, Bell, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  // Mock data - replace with real data from your backend
  const upcomingEvents = [
    { type: 'service', item: 'Air Conditioner', date: '2024-04-15' },
    { type: 'warranty', item: 'Smart TV', date: '2024-05-01' },
    { type: 'insurance', item: 'Refrigerator', date: '2024-04-30' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          icon={Clock}
          title="Upcoming Services"
          value="3"
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <DashboardCard
          icon={Shield}
          title="Expiring Warranties"
          value="2"
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
        <DashboardCard
          icon={Bell}
          title="Active Complaints"
          value="1"
          color="text-red-600"
          bgColor="bg-red-100"
        />
        <DashboardCard
          icon={AlertCircle}
          title="Insurance Renewals"
          value="2"
          color="text-green-600"
          bgColor="bg-green-100"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="mr-4">
                {event.type === 'service' && <Clock className="text-blue-500" />}
                {event.type === 'warranty' && <Shield className="text-yellow-500" />}
                {event.type === 'insurance' && <AlertCircle className="text-green-500" />}
              </div>
              <div>
                <p className="font-medium">{event.item}</p>
                <p className="text-sm text-gray-600">
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)} due on {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon: Icon, title, value, color, bgColor }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className={`${bgColor} ${color} p-3 rounded-full`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="ml-4">
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

export default Dashboard;