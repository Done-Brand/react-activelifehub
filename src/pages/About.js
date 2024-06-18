import React from "react";
import { Link } from "react-router-dom";
import AboutBackground from "../assets/AboutBackground.png";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-8">
        <div className="relative bg-white border-8 border-white rounded-lg overflow-hidden shadow-lg mt-24 lg:mt-32 mx-auto max-w-screen-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${AboutBackground})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative py-16 px-4 lg:px-8">
            <h2 className="mb-8 text-6xl tracking-tight font-extrabold text-center text-white">
              About Us
            </h2>
            <p className="mb-8 font-light text-center text-white sm:text-xl">
              Active Life Hub is a dynamic eCommerce platform dedicated to
              automating the selling of high-quality goods that promote healthy
              lifestyles. We specialize in natural supplements, home gym
              equipment, and sports wear. Our mission is to make it easier for
              individuals to access the products they need to support their
              wellness goals.
            </p>
            <p className="mb-8 font-light text-center text-white sm:text-xl">
              Founded with the belief that everyone deserves to live a healthy
              and active life, we are committed to providing exceptional value
              through our diverse product offerings. We are passionate about
              helping our customers achieve their health and fitness objectives
              by offering innovative, reliable, and affordable products.
            </p>
            <p className="mb-8 font-light text-center text-white sm:text-xl">
              At Active Life Hub, we understand that convenience is key, which
              is why we have streamlined the shopping experience to make it as
              seamless and enjoyable as possible. From the moment you visit our
              site to the delivery of your order, we strive to exceed your
              expectations with every interaction.
            </p>
            <p className="mb-8 font-light text-center text-white sm:text-xl">
              Join us on our journey to promote healthier lifestyles and
              discover how our products can help you live your best life. Thank
              you for choosing Active Life Hub as your trusted partner in health
              and wellness.
            </p>
            <div className="text-center">
              <Link
                to="/home"
                className="inline-block mt-8 py-3 px-6 text-sm font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
