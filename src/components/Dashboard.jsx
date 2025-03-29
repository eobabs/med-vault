import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Dashboard() {
 
  const patientData = {
    name: "Ada Okoroafor",
    dob: "05/12/1985",
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts"],
    conditions: ["Hypertension", "Type 2 Diabetes"]
  };
  

  const records = [
    { id: 1, date: "2025-03-01", type: "Visit", provider: "Dr. Johnson", verified: true },
    { id: 2, date: "2025-02-15", type: "Lab Result", provider: "Ireakari Diagnostics", verified: true },
    { id: 3, date: "2025-01-20", type: "Prescription", provider: "Dr. Sanusi", verified: false }
  ];
  
  return (
    <div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Medical Records Dashboard</h1>
        
        {/* Patient Info Card */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-medium">Name:</span> {patientData.name}</p>
              <p><span className="font-medium">Date of Birth:</span> {patientData.dob}</p>
              <p><span className="font-medium">Blood Type:</span> {patientData.bloodType}</p>
            </div>
            <div>
              <p><span className="font-medium">Allergies:</span> {patientData.allergies.join(", ")}</p>
              <p><span className="font-medium">Medical Conditions:</span> {patientData.conditions.join(", ")}</p>
            </div>
          </div>
        </div>
        
        {/* Recent Records */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Medical Records</h2>
            <Link to="/share" className="bg-blue-600 text-white px-4 py-2 rounded">
              Share Records
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Provider</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record => (
                  <tr key={record.id} className="border-t">
                    <td className="py-2 px-4">{record.date}</td>
                    <td className="py-2 px-4">{record.type}</td>
                    <td className="py-2 px-4">{record.provider}</td>
                    <td className="py-2 px-4">
                      {record.verified ? 
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Verified
                        </span> : 
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          Pending
                        </span>
                      }
                    </td>
                    <td className="py-2 px-4">
                      <Link to={`/records/${record.id}`} className="text-blue-600 hover:underline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;