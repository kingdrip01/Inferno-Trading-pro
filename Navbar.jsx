import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Inferno Trading Pro</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
        <Link to="/bots" className="hover:text-yellow-400">Bots</Link>
        <Link to="/subscriptions" className="hover:text-yellow-400">Subscriptions</Link>
        <Link to="/settings" className="hover:text-yellow-400">Settings</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;