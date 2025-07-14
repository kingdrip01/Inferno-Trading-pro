import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Inferno Trading Pro</h1>
      <p className="text-lg mb-6 text-gray-300">
        Your trusted platform for high-performing Volatility Index bots. Choose from free or premium bots and dominate the market.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Free Bots</h2>
          <p className="text-gray-400">Access powerful bots for VIX 10 to 100s absolutely free.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Premium Bots</h2>
          <p className="text-gray-400">Unlock advanced strategies with paid bots for better results.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;