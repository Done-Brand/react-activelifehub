import React from "react";
import VisitorsAnalytics from "../assets/VisitorsAnalytics.png";
import ProfitChart from "../assets/ProfitChart.png";
import TopChannelsTable from "../assets/TopChannelsTable.png";

const statisticsData = [
  {
    id: 1,
    title: "Visitors Analytics",
    description: "Monthly overview of visitors",
    image: VisitorsAnalytics,
  },
  {
    id: 2,
    title: "Profit this week",
    description: "Weekly profit report",
    image: ProfitChart,
  },
  {
    id: 3,
    title: "Top Channels",
    description: "Top channels engagaed",
    image: TopChannelsTable,
  },
];

const StatisticsComp = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Statistics
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Business Insights
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get a clear understanding of your business performance.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center">
            {statisticsData.map((stat) => (
              <div
                key={stat.id}
                className="m-4 bg-white shadow-xl rounded-lg overflow-hidden"
              >
                <div className="p-4">
                  <img
                    src={stat.image}
                    alt={stat.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stat.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsComp;
