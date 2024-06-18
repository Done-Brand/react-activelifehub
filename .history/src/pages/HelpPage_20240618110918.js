import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HelpPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">
            Help Center
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Frequently Asked Questions
            </h2>
            <div className="mb-4">
              <p className="text-white font-semibold">
                How do I track my order?
              </p>
              <p className="text-white">
                You can track your order by visiting the{" "}
                <Link to="/track-order" className="text-black hover:underline">
                  Track Order
                </Link>{" "}
                page and entering your order number.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-semibold">
                What is the return policy?
              </p>
              <p className="text-white">
                Our return policy allows you to return items within 30 days of
                purchase. For more details, visit our{" "}
                <Link to="/returns" className="text-black hover:underline">
                  Returns
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-semibold">
                How do I contact customer support?
              </p>
              <p className="text-white">
                You can contact our customer support by emailing us at
                support@activelifehub.com or calling us at (+27) 21 569 4587.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white font-semibold">
                How do I update my personal details?
              </p>
              <p className="text-white">
                You can update your personal details by visiting the{" "}
                <Link
                  to="/personal-details"
                  className="text-black hover:underline"
                >
                  Personal Details
                </Link>{" "}
                page and editing your information.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Shipping Information
            </h2>
            <p className="text-white mb-4">
              We offer free standard shipping on all orders over R500. Orders
              are typically processed within 1-2 business days and delivered
              within 5-7 business days.
            </p>
            <p className="text-white">
              For express shipping options, please refer to our{" "}
              <Link to="/shipping" className="text-black hover:underline">
                Shipping Information
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Contact Us
            </h2>
            <p className="text-white mb-4">
              If you have any further questions or need assistance, feel free to
              contact our customer support team.
            </p>
            <p className="text-white">
              Email:{" "}
              <a
                href="mailto:support@example.com"
                className="text-black hover:underline"
              >
                support@activelifehub.com
              </a>
              <br />
              Phone: (+27) 21 569 4587
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

export default HelpPage;
