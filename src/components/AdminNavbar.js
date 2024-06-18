import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";

const AdminNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-auto filter contrast-150"
          />
          <Link to="/admin" className="text-white text-3xl font-bold ml-4">
            Active Life Hub
          </Link>
        </div>
        <div className="text-white text-2xl">Hello Admin</div>
        <div className="flex items-center space-x-6">
          <Link
            to="/admin"
            className="text-white bg-blue-800 hover:bg-blue-900 px-4 py-3 rounded-md text-lg font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-md text-lg font-medium"
          >
            Products
          </Link>
          <Link
            to="/admin/statistics"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-lg font-medium"
          >
            Statistics
          </Link>
          <Link
            to="/home"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md text-lg font-medium"
          >
            Client Portal
          </Link>
          <Link
            to="/login"
            className="text-white bg-blue-400 hover:bg-blue-500 px-4 py-3 rounded-md text-lg font-medium"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
