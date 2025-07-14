import React from "react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-16 bg-gray-900 p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white" placeholder="Email" />
      <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white" placeholder="Password" type="password" />
      <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl w-full">Sign In</button>
    </div>
  );
};

export default Login;