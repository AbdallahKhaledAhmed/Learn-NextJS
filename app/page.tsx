import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-1 flex-col gap-5">
      <h1 className="text-4xl font-bold text-slate-800">
        Welcome to the Dashboard App!
      </h1>
      <p className="text-slate-600">
        Manage your tasks, track analytics, and stay organized with our powerful
        dashboard.
      </p>
      <Link
        href="/dashboard"
        className="text-white bg-blue-600 px-5 py-2 rounded cursor-pointer hover:opacity-85"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default page;
