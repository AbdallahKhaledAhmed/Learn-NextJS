import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="rounded w-[60%] mx-auto mt-15 shadow-lg text-gray-600">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>
        Welcome back! Here you can manage your tasks, view analytics and make
        adjustments.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-10 py-5">
        <Link href="./tasks" className="bg-blue-100 rounded py-5 px-3">
          <div className="flex justify-between text-xl font-semibold items-center">
            <span>Tasks</span> <span className="text-2xl">📝</span>
          </div>
          <p className="text-sm p-2">
            View, organize and manage your daily tasks.
          </p>
        </Link>
        <Link href="./tasks" className="bg-green-100 rounded py-5 px-3">
          <div className="flex justify-between text-xl font-semibold items-center">
            <span>Analytics</span> <span className="text-2xl">📊</span>
          </div>
          <p className="text-sm p-2">
            Gain insights about your performance and trends.
          </p>
        </Link>
        <Link href="./tasks" className="bg-pink-100 rounded py-5 px-3">
          <div className="flex justify-between text-xl font-semibold items-center">
            <span>Settings</span> <span className="text-2xl">⚙️</span>
          </div>
          <p className="text-sm p-2">
            Customize and tweek your dashboard settings.
          </p>
        </Link>
        <Link href="./tasks" className="bg-yellow-100 rounded py-5 px-3">
          <div className="flex justify-between text-xl font-semibold items-center">
            <span>Users</span> <span className="text-2xl">🧑‍🤝‍🧑</span>
          </div>
          <p className="text-sm p-2">View and manage your user base.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
