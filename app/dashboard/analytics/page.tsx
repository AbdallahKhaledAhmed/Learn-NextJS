import Activity, { ActivityType } from "@/components/Activity";
import AnalyticsCard, { AnalyticsType } from "@/components/AnalyticsCard";

const analytics: AnalyticsType[] = [
  { title: "Total Sales", value: "$120,000", percentage: "+12%" },
  { title: "Active Users", value: "1,200", percentage: "-8%" },
  { title: "Website Visits", value: "8,500", percentage: "+5%" },
  { title: "New Sign-Ups", value: "350", percentage: "+18%" },
];

const activities: ActivityType[] = [
  {
    title: "User Registration",
    value: "+10 Users",
    description: "New user signed up on 2025-02-16",
  },
  {
    title: "Sales Increase",
    value: "+$15,000",
    description: "Sales grew by 12% on 2025-02-14",
  },
  {
    title: "Website Traffic Surge",
    value: "+200 Visits",
    description: "Traffic increased by 8% on 2025-02-13",
  },
];

const ChartPlaceholder = () => {
  return (
    <div className="bg-gray-100 rounded-lg h-72 center text-gray-500">
      Chart Placeholder
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="p-16 space-y-10 max-w-7xl mx-auto bg-white rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 ">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {analytics.map((ele, ind) => (
          <AnalyticsCard {...ele} key={ind} />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Website Traffic
        </h2>
        <ChartPlaceholder />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          User Sign-Ups
        </h2>
        <ChartPlaceholder />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-2 divide-gray-300 divide-y p-5">
          {activities.map((ele, ind) => (
            <Activity {...ele} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
