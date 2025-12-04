import Link from "next/link";

const Users = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl mt-15 p-8 space-y-7">
      <h1 className="text-4xl font-bold text-gray-800">Users</h1>
      <p className="text-lg text-gray-600">
        Manage your users here. You can view detailed information or browse a
        list of users.
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        <Link
          href="./users-details"
          className="hover:shadow-lg transition-shadow space-y-3 p-3"
        >
          <p className="text-xl font-semibold text-teal-800">User Details</p>
          <p className="text-gray-600">
            View detailed information about each user in your system.
          </p>
        </Link>
        <Link
          href="./users-list"
          className="hover:shadow-lg transition-shadow space-y-3 p-3"
        >
          <p className="text-xl font-semibold text-orange-800">User List</p>
          <p className="text-gray-600">
            Browse and manage all users in the system.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Users;
