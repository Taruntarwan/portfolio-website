import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Mail className="w-6 h-6 text-purple-600" />
        <div>
          <h4 className="font-semibold">Email</h4>
          <p className="text-gray-600">taruntarwan98@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <MapPin className="w-6 h-6 text-purple-600" />
        <div>
          <h4 className="font-semibold">Location</h4>
          <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </div>
  </div>
);