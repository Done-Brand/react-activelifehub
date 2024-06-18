import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../assets/Banner.png";
import TrojanAd from "../assets/TrojanAd.png";
import ScrollingAds from "../components/ScrollingAds";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[500px] flex-shrink-0 overflow-hidden">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
      </div>

      {/* <ScrollingAds /> */}
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
      </div>
    </>
  );
};

export default Home;
