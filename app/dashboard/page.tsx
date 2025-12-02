import type { props } from "@/components/Card";
import Card from "@/components/Card";
const cards: props[] = [
  {
    bgClass: "bg-blue-100 hover:bg-blue-200 text-blue-800",
    symbol: "📝",
    title: "Tasks",
    description: "View, organize, and manage your daily tasks.",
    href: "./tasks",
  },
  {
    bgClass: "bg-green-100 hover:bg-green-200 text-green-800",
    symbol: "📊",
    title: "Analytics",
    description: "Gain insights into your performance and trends.",
    href: "./analytics",
  },
  {
    bgClass: "bg-purple-100 hover:bg-purple-200 text-purple-800",
    symbol: "⚙️",
    title: "Settings",
    description: "Customize and tweak your dashboard settings.",
    href: "./settings",
  },
  {
    bgClass: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
    symbol: "🧑‍🤝‍🧑",
    title: "Users",
    description: "View and manage your user base.",
    href: "./users",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 h-screen flex p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 h-fit">
        <h1 className="text-4xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Welcome back! Here you can manage your tasks, view analytics, and make
          adjustments.
        </p>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((ele, ind) => (
            <Card {...ele} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
