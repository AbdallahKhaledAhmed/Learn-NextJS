import Image from "next/image";

type ActivityType = { description: string; date: string };

const activities: ActivityType[] = [
  { description: "Updated password", date: "2025-02-10" },
  { description: "Changed email address", date: "2025-01-25" },
  { description: "Logged in from a new device", date: "2025-01-15" },
];

const Activity = (props: ActivityType) => {
  return (
    <div className="flex gap-3 items-center py-3">
      <div className="text-white w-8 h-8 center rounded-full bg-blue-600">
        A
      </div>
      <div>
        <p className="text-gray-700">{props.description}</p>
        <p className="text-gray-500">{props.date}</p>
      </div>
    </div>
  );
};

const UserDetails = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl space-y-10 p-8">
      <div className="flex gap-8">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-sm text-gray-600">john.doe@example.com</p>
          <p className="text-sm text-gray-600">Role: Admin</p>
          <p className="text-sm mt-2 text-green-500">Status: Active</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Activities
        </h2>
        {activities.map((ele, ind) => (
          <Activity {...ele} key={ind} />
        ))}
      </div>
      <div className="ml-auto mt-5 w-fit space-x-5">
        <button>Cancel</button>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
