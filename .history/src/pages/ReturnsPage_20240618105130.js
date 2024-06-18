import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ReturnsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">
            Returns
          </h1>
          <p className="mb-4 text-white">
            At Active Life Hub, we want you to be completely satisfied with your
            purchase. If for any reason you are not happy with your product, you
            can return it within 30 days of purchase.
          </p>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Return Policy
          </h2>
          <p className="mb-4 text-white">
            To be eligible for a return, your item must be unused and in the
            same condition that you received it. It must also be in the original
            packaging. Please provide a receipt or proof of purchase when
            returning your item.
          </p>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            How to Return an Item
          </h2>
          <p className="mb-4 text-white">
            To return an item, please fill out the return request form below.
            Once your return request is approved, we will provide you with a
            return shipping label and instructions on how to send your item back
            to us.
          </p>
          <form className="space-y-4">
            <div>
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="orderNumber"
              >
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="reason"
              >
                Reason for Return
              </label>
              <textarea
                id="reason"
                name="reason"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit Return Request
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
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

export default ReturnsPage;
