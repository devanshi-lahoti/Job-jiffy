import React from 'react';
import UserProfile from '../components/UserProfile';

const Dashboard = () => {
  const loggedInUser = {
    name: "Pramod Tiwari",
    email: "pramod@jobjiffy.com",
    profilePic: "", // Ya koi URL agar ho toh
    role: "Service Provider",
    bio: "Expert Electrician with 5+ years of experience.",
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800">Your Profile</h1>
      <UserProfile user={loggedInUser} />
    </div>
  );
};

export default Dashboard;
