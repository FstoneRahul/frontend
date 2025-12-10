import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md text-center">
        <div className="mb-6">
          {user.avatar ? (
            <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-300" />
          ) : (
            <div className="w-24 h-24 bg-purple-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
            View Profile
          </button>
          <button className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105">
            Settings
          </button>
          <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;