import { useState } from 'react';
import HospitalProfileForm from '../hospital/HospitalProfileForm';
import BedStatusSection from '../hospital/BedStatusSection';
import PatientAdmissionForm from '../hospital/PatientAdmissionForm';
import PatientDischargeForm from '../hospital/PatientDischargeForm';

export default function HospitalDashboard() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return (
          <div>
            <button
              onClick={() => setActiveView('dashboard')}
              className="mb-4 text-sm text-indigo-600 hover:text-indigo-500"
            >
              ← Back to Dashboard
            </button>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Update Hospital Profile</h2>
              <HospitalProfileForm />
            </div>
          </div>
        );

      case 'bed-status':
        return (
          <div>
            <button
              onClick={() => setActiveView('dashboard')}
              className="mb-4 text-sm text-indigo-600 hover:text-indigo-500"
            >
              ← Back to Dashboard
            </button>
            <BedStatusSection />
          </div>
        );

      case 'admit-patient':
        return (
          <div>
            <button
              onClick={() => setActiveView('dashboard')}
              className="mb-4 text-sm text-indigo-600 hover:text-indigo-500"
            >
              ← Back to Dashboard
            </button>
            <PatientAdmissionForm />
          </div>
        );

      case 'discharge-patient':
        return (
          <div>
            <button
              onClick={() => setActiveView('dashboard')}
              className="mb-4 text-sm text-indigo-600 hover:text-indigo-500"
            >
              ← Back to Dashboard
            </button>
            <PatientDischargeForm />
          </div>
        );

      default:
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">Welcome to Hospital Management</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-medium mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <button
                    onClick={() => setActiveView('profile')}
                    className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="text-lg">👤</span>
                    <span>Update Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveView('bed-status')}
                    className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="text-lg">🛏️</span>
                    <span>Bed Status</span>
                  </button>
                  <button
                    onClick={() => setActiveView('admit-patient')}
                    className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="text-lg">➕</span>
                    <span>Admit Patient</span>
                  </button>
                  <button
                    onClick={() => setActiveView('discharge-patient')}
                    className="p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="text-lg">➖</span>
                    <span>Discharge Patient</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Hospital Statistics</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Total Beds: Loading...</p>
                    <p>Available Beds: Loading...</p>
                    <p>Admitted Patients: Loading...</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Recent Activities</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Loading recent activities...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Hospital Dashboard</h1>
      {renderContent()}
    </div>
  );
}