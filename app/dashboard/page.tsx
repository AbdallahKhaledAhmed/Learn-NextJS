import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Home</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};

export default Dashboard;
