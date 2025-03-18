import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const Complaints = () => {
  const complaints = [
    {
      id: '1',
      item: 'Samsung Smart TV',
      description: 'Screen flickering issue',
      status: 'pending',
      date: '2024-03-15',
    },
    {
      id: '2',
      item: 'LG Refrigerator',
      description: 'Not cooling properly',
      status: 'processing',
      date: '2024-03-10',
    },
    {
      id: '3',
      item: 'Sony Home Theater',
      description: 'No sound from rear speakers',
      status: 'resolved',
      date: '2024-03-05',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Complaints</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Raise New Complaint
        </button>
      </div>

      <div className="grid gap-6">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{complaint.item}</h3>
              <div className="flex items-center">
                {getStatusIcon(complaint.status)}
                <span className="ml-2 text-sm capitalize">{complaint.status}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{complaint.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Complaint ID: #{complaint.id}</span>
              <span>Filed on: {complaint.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complaints;