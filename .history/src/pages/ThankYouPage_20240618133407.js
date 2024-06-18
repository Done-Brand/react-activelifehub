import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ThankYouPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-blue-500 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700">
            Your order has been placed successfully.
          </p>
          <div className="mt-6">
            <Link
              to="/home"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
