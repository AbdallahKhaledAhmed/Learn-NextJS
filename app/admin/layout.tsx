import Link from "next/link";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-blue-800 text-white p-3 ">
        <h2 className="text-2xl">Admin Panel</h2>
        <div className="flex gap-4">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/users">Users</Link>
          <Link href="/admin/settings">Settings</Link>
        </div>
      </header>
      <div className="flex flex-1 py-5 gap-5">
        <aside className="w-64 flex flex-col [&>a]:py-2 [&>a]:hover:bg-gray-300">
          <Link href={"./dashboard"}>Dashboard</Link>
          <Link href={"./manage-users"}>Manage Users</Link>
          <Link href={"./settings"}>Settings</Link>
        </aside>
        <main className="p-6">{children}</main>
      </div>
      <div className="bg-blue-800 center text-white p-4">
        © 2025 Admin Panel
      </div>
    </div>
  );
};

export default AdminLayout;
