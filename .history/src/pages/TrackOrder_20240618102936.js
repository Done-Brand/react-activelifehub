import React from "react";
import Navbar from "../components/Navbar";
import {
  CheckCircleIcon,
  TruckIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import MapImage from "../assets/Map.png"; // Import the map image

const TrackOrder = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center border-8 border-bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${MapImage})` }}
        ></div>
        <div className="relative max-w-md mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
          <ul role="list" className="-mb-8">
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                      <UserIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Packing at{" "}
                        <span className="font-medium text-gray-900">
                          Active Life Hub
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2020-09-20">Jan 20</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                      <TruckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        With driver{" "}
                        <span className="font-medium text-gray-900">
                          on the way to the plane
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2020-09-22">Jan 22</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                      <PaperAirplaneIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        On plane ready to fly{" "}
                        <span className="font-medium text-gray-900">
                          to YOU
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2020-09-28">Jan 28</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                      <TruckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        With driver{" "}
                        <span className="font-medium text-gray-900">
                          on the way to you
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2020-09-30">Jan 30</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                      <CheckCircleIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Wait outside the door{" "}
                        <span className="font-medium text-gray-900">
                          the driver is close
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="2020-10-04">Feb 4</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
