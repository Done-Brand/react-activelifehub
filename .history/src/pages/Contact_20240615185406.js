// src/pages/Contact.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Got a issue? Want to send feedback about our products? Need details
            about your current shipped orders? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white border border-gray-300 text-purple-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-white border border-gray-300 text-purple-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-white border border-gray-300 text-purple-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Leave a comment..."
                autoComplete="off"
              ></textarea>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Send message
              </button>
              <Link
                to="/home"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                &larr; Back
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
