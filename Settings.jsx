import React from "react";

const Settings = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-900 p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white" placeholder="Update Email" />
      <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white" placeholder="New Password" type="password" />
      <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl w-full">Save Changes</button>
    </div>
  );
};

export default Settings;