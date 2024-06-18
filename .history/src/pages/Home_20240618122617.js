import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../assets/Banner.png";
import ProductCards from "../components/ProductCards";
import PromoSection from "../components/PromoSection";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[500px] flex-shrink-0 overflow-hidden">
        <img
          src={Banner}
          alt="Banner"
          className="w-full h-full object-cover opacity-90"
        />

        <h1 className="text-4xl font-extrabold text-white z-10">
          Welcome to Active Life Hub
        </h1>
        <p className="text-2xl text-black font-medium mt-4">
          Healthy life? You came to the right place
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-16">
        <ProductCards />
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-24">
        <PromoSection />
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-16">
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
