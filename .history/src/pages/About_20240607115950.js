// src/pages/About.js
import React from "react";
import { Link } from "react-router-dom";
import AboutBackground from "../assets/AboutBackground.png";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-8">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${AboutBackground})` }}
      ></div>
      <div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-lg  rounded-lg  mt-48 lg:ml-auto lg:mr-16">
        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white">
          About Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Active Life Hub is a dynamic eCommerce platform dedicated to
          automating the selling of high-quality goods that promote healthy
          lifestyles. We specialize in natural supplements, home gym equipment,
          and sports wear. Our mission is to make it easier for individuals to
          access the products they need to support their wellness goals.
        </p>
        {/* <div className="text-center text-white space-y-4"> */}
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Founded with the belief that everyone deserves to live a healthy and
          active life, we are committed to providing exceptional value through
          our diverse product offerings. We are passionate about helping our
          customers achieve their health and fitness objectives by offering
          innovative, reliable, and affordable products.
        </p>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          At Active Life Hub, we understand that convenience is key, which is
          why we have streamlined the shopping experience to make it as seamless
          and enjoyable as possible. From the moment you visit our site to the
          delivery of your order, we strive to exceed your expectations with
          every interaction.
        </p>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Join us on our journey to promote healthier lifestyles and discover
          how our products can help you live your best life. Thank you for
          choosing Active Life Hub as your trusted partner in health and
          wellness.
        </p>
        <Link
          to="/home"
          className="mt-16 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          &larr; Back to Home
        </Link>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
