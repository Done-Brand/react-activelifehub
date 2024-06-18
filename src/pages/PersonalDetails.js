import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PersonalDetailsPage = () => {
  // Dummy data for demonstration
  const user = {
    name: "UserName UserSurname",
    email: "user@gmail.com",
    phone: "078 654 1236",
  };

  const addresses = [
    {
      type: "Home",
      address: "123 Main St, Cape Town, Western Cape, RSA",
    },
    {
      type: "Work",
      address: "456 Long St, Cape Town, Western Cape, RSA",
    },
  ];

  const accountSettings = {
    newsletter: true,
    notifications: false,
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">
            Personal Details
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Personal Information
            </h2>
            <p className="text-white">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-white">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-white">
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Addresses
            </h2>
            {addresses.map((address, index) => (
              <div key={index} className="mb-4">
                <p className="text-white">
                  <strong>{address.type} Address:</strong>
                </p>
                <p className="text-white">{address.address}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Account Settings
            </h2>
            <p className="text-white">
              <strong>Newsletter Subscription:</strong>{" "}
              {accountSettings.newsletter ? "Subscribed" : "Not Subscribed"}
            </p>
            <p className="text-white">
              <strong>Notifications:</strong>{" "}
              {accountSettings.notifications ? "Enabled" : "Disabled"}
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/home"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetailsPage;
