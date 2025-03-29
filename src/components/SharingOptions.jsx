import React, { useState } from 'react';
import Navbar from './Navbar';

function SharingOptions() {
  const [accessDuration, setAccessDuration] = useState('1 hour');
  const [fullAccess, setFullAccess] = useState(true);
  const [medicationsOnly, setMedicationsOnly] = useState(false);
  const [recentOnly, setRecentOnly] = useState(false);
  
  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Share Medical Records</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Share via QR Code</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <p>QR Code will appear here</p>
                <p className="text-sm mt-2">Healthcare providers can scan this code</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Generate QR Code
            </button>
          </div>
          
          {/* Access Control */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Access Settings</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Access Duration
              </label>
              <select 
                className="w-full border border-gray-300 rounded p-2"
                value={accessDuration}
                onChange={(e) => setAccessDuration(e.target.value)}
              >
                <option>1 hour</option>
                <option>4 hours</option>
                <option>8 hours</option>
                <option>24 hours</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Records to Share
              </label>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="fullAccess" 
                    checked={fullAccess}
                    onChange={() => setFullAccess(!fullAccess)}
                    className="mr-2" 
                  />
                  <label htmlFor="fullAccess">Full medical history</label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="medicationsOnly" 
                    checked={medicationsOnly}
                    onChange={() => setMedicationsOnly(!medicationsOnly)}
                    className="mr-2" 
                  />
                  <label htmlFor="medicationsOnly">Medications only</label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="recentOnly" 
                    checked={recentOnly}
                    onChange={() => setRecentOnly(!recentOnly)}
                    className="mr-2" 
                  />
                  <label htmlFor="recentOnly">Recent records only (6 months)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharingOptions;