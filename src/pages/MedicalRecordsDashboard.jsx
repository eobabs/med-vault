
import React, { useState } from 'react';
import { Calendar, Clock, File, FileText, User, Shield, Activity } from 'lucide-react';

const MedicalRecordsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  
  const patientData = {
    name: "Ada Okoroafor",
    dob: "05/12/1985",
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts"],
    conditions: ["Hypertension", "Type 2 Diabetes"],
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" }
    ]
  };
  
  const medicalRecords = [
    { id: "rec-001", type: "Visit", date: "2025-03-01", provider: "Dr. Emily Saka", facility: "City General Hospital", description: "Annual physical examination", verified: true },
    { id: "rec-002", type: "Lab Result", date: "2025-02-15", provider: "Ireakari Diagnostics", facility: "Ireakai Lab #153", description: "Blood panel results", verified: true },
    { id: "rec-003", type: "Prescription", date: "2025-01-20", provider: "Dr. Michael Kola", facility: "Sabo Health Centre", description: "Medication renewal", verified: true },
    { id: "rec-004", type: "Vaccination", date: "2024-11-10", provider: "Dr. Sarah Williams", facility: "Reddington Hospital", description: "Flu shot", verified: true },
  ];
  
  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <User className="mr-2 text-blue-600" size={20} />
          Patient Information
        </h3>
        <div className="space-y-3">
          <p><span className="font-medium">Name:</span> {patientData.name}</p>
          <p><span className="font-medium">Date of Birth:</span> {patientData.dob}</p>
          <p><span className="font-medium">Blood Type:</span> {patientData.bloodType}</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <Shield className="mr-2 text-blue-600" size={20} />
          Active Alerts
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Allergies
            </div>
            <p className="ml-2">{patientData.allergies.join(", ")}</p>
          </div>
          <div className="flex items-start">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Conditions
            </div>
            <p className="ml-2">{patientData.conditions.join(", ")}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <Activity className="mr-2 text-blue-600" size={20} />
          Current Medications
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Medication</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Dosage</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {patientData.medications.map((med, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-3">{med.name}</td>
                  <td className="px-4 py-3">{med.dosage}</td>
                  <td className="px-4 py-3">{med.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  const renderRecords = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Recent Medical Records</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            Share Records
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Filter
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Provider</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicalRecords.map((record) => (
              <tr key={record.id} className="border-t">
                <td className="px-4 py-3">{record.type}</td>
                <td className="px-4 py-3">{record.date}</td>
                <td className="px-4 py-3">{record.provider}</td>
                <td className="px-4 py-3">{record.description}</td>
                <td className="px-4 py-3">
                  {record.verified ? 
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Verified
                    </span> : 
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                      Pending
                    </span>
                  }
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  const renderSharingOptions = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium mb-4">Share Medical Records</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="bg-gray-200 w-48 h-48 flex items-center justify-center mb-4">
            <div className="text-center text-gray-500">QR Code Preview</div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 w-full">
            Generate QR Code
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Healthcare providers can scan this code to access your records
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium mb-2">Access Settings</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Access Duration
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>1 hour</option>
                <option>4 hours</option>
                <option>8 hours</option>
                <option>24 hours</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Access Level
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="fullAccess" className="mr-2" checked />
                  <label htmlFor="fullAccess">Full medical history</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="medicationsOnly" className="mr-2" />
                  <label htmlFor="medicationsOnly">Medications only</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="recentOnly" className="mr-2" />
                  <label htmlFor="recentOnly">Recent records only (6 months)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">MedVault</h1>
            <div className="flex items-center">
              <div className="mr-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Blockchain Verified
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                JS
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex border-b border-gray-200 mb-6">
          <button
            className={`mr-8 py-4 px-1 ${
              activeTab === 'overview' 
                ? 'border-b-2 border-blue-500 font-medium text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`mr-8 py-4 px-1 ${
              activeTab === 'records' 
                ? 'border-b-2 border-blue-500 font-medium text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('records')}
          >
            Medical Records
          </button>
          <button
            className={`mr-8 py-4 px-1 ${
              activeTab === 'share' 
                ? 'border-b-2 border-blue-500 font-medium text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('share')}
          >
            Share Records
          </button>
        </nav>
        
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'records' && renderRecords()}
        {activeTab === 'share' && renderSharingOptions()}
      </main>
    </div>
  );
};

export default MedicalRecordsDashboard;