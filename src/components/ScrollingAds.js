import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing an icon from react-icons
import BioteenAd from "../assets/BioteenAd.png"; // Ensure the path and extension match your file
import Ad2 from "../assets/NikeAd.png"; // Add more ads as needed
import Ad3 from "../assets/TrojanAd.png";

const ads = [BioteenAd, Ad2, Ad3]; // Array of ad images

const ScrollingAds = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full h-96 flex-shrink-0 overflow-hidden">
        <img
          src={ads[currentAdIndex]}
          alt={`Ad ${currentAdIndex + 1}`}
          className="w-full h-full object-cover" // Ensure the image covers the container
        />
      </div>
      <button
        onClick={nextAd}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center"
      >
        <span className="mr-2">Next Ad</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ScrollingAds;
