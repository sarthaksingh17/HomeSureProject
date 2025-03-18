import React from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Insurance = () => {
  const insuranceOffers = [
    {
      provider: 'SecureGuard',
      coverage: 'Extended Device Protection',
      price: '$99/year',
      benefits: ['Accidental damage', 'Technical support', '24/7 claims'],
    },
    {
      provider: 'HomeSafe',
      coverage: 'Premium Protection',
      price: '$149/year',
      benefits: ['All repairs covered', 'Replacement guarantee', 'Priority service'],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Insurance</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {insuranceOffers.map((offer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-500 p-6">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white ml-3">{offer.provider}</h3>
              </div>
              <p className="text-blue-100 mt-2">{offer.coverage}</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-800 mb-6">{offer.price}</div>
              <ul className="space-y-4">
                {offer.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center">
                Get Coverage
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Your Insured Items</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Samsung Smart TV</p>
              <p className="text-sm text-gray-600">Coverage ends: April 15, 2025</p>
            </div>
            <button className="text-blue-500 hover:text-blue-700">Renew</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">LG Refrigerator</p>
              <p className="text-sm text-gray-600">Coverage ends: August 1, 2024</p>
            </div>
            <button className="text-blue-500 hover:text-blue-700">Renew</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;