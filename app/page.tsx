import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 center flex-col gap-6 h-screen text-center">
      <h1 className="text-5xl font-bold text-gray-800">
        Welcome to the Dashboard App
      </h1>
      <p className="ext-lg text-gray-600">
        Manage your tasks, track analytics, and stay organized with our powerful
        dashboard.
      </p>
      <Link
        href="/dashboard"
        className="mt-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
