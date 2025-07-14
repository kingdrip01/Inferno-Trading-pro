import React from "react";

const Subscriptions = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Free Plan</h2>
          <p className="text-gray-400 mb-4">Access to basic bots for all indices.</p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl">Current Plan</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Premium Plan</h2>
          <p className="text-gray-400 mb-4">Unlock all advanced bots and exclusive strategies.</p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;