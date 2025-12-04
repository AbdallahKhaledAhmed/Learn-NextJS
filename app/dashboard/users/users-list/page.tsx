type UserProps = {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Suspended";
};

const users: UserProps[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    name: "Sam Brown",
    email: "sam.brown@example.com",
    role: "User",
    status: "Suspended",
  },
];

const UserRow = (props: UserProps) => {
  const statusColor = (() => {
    switch (props.status) {
      case "Active":
        return "text-green-500";
      case "Inactive":
        return "text-yellow-500";
      default:
        return "text-red-500";
    }
  })();
  return (
    <tr className="text-center">
      <td className="p-5">{props.name}</td>
      <td className="p-5">{props.email}</td>
      <td className="p-5">{props.role}</td>
      <td className={`p-5 ${statusColor}`}>{props.status}</td>
      <td className="space-x-5">
        <button>Edit</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">
          View
        </button>
      </td>
    </tr>
  );
};

const UsersList = () => {
  return (
    <div className="p-16 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">Users List</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full">
          <thead className="bg-blue-600">
            <tr className="text-white text-center [&>th]:p-4">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((ele, ind) => (
              <UserRow {...ele} key={ind} />
            ))}
            {users.map((ele, ind) => (
              <UserRow {...ele} key={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
