import React from 'react';
import { Upload, FileText, Download } from 'lucide-react';

const Bills = () => {
  const bills = [
    {
      id: '1',
      item: 'Samsung Smart TV',
      date: '2023-10-15',
      amount: '$899',
      type: 'Purchase',
    },
    {
      id: '2',
      item: 'LG Refrigerator',
      date: '2023-08-01',
      amount: '$1,299',
      type: 'Purchase',
    },
    {
      id: '3',
      item: 'Air Conditioner',
      date: '2024-02-15',
      amount: '$150',
      type: 'Service',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bills & Receipts</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Upload className="w-5 h-5 mr-2" />
          Upload Bill
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Bills</h2>
        </div>
        <div className="divide-y">
          {bills.map((bill) => (
            <div key={bill.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">{bill.item}</h3>
                  <p className="text-sm text-gray-500">
                    {bill.type} - {bill.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-6 font-medium">{bill.amount}</span>
                <button className="text-blue-500 hover:text-blue-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bills;