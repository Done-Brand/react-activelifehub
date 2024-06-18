import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import StatisticsComp from "../components/StatisticsComp";

const Statistics = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          This is a component that I would wish to complete still, but as the
          scope of this project is already getting to big I am just displaying
          the idea here.
        </h1>
        <StatisticsComp />
      </div>
    </div>
  );
};

export default Statistics;
