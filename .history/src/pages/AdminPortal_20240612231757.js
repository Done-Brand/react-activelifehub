import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  ShoppingCartIcon,
  UserGroupIcon,
  EyeIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Total Revenue",
      data: [30, 20, 50, 40, 60, 50, 70],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Total Sales",
      data: [20, 30, 40, 30, 50, 40, 60],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

const AdminPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4">
            <h1 className="text-3xl font-bold text-center">Admin Portal</h1>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center">
                <EyeIcon className="h-10 w-10 text-blue-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">3.456K</p>
                  <p className="text-gray-500">Total Views</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center">
                <ShoppingCartIcon className="h-10 w-10 text-green-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">$45.2K</p>
                  <p className="text-gray-500">Total Profit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center">
                <CubeIcon className="h-10 w-10 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">2.450</p>
                  <p className="text-gray-500">Total Products</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center">
                <UserGroupIcon className="h-10 w-10 text-purple-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">3.456</p>
                  <p className="text-gray-500">Total Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 mt-4">
          <h2 className="text-2xl font-bold mb-4">
            Total Revenue vs Total Sales
          </h2>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
