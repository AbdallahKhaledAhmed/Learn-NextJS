import Image from "next/image";

const ProfileSettings = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>
      <h2 className="text-xl font-semibold text-gray-700">Profile Picture</h2>
      <div className="w-24 h-24 rounded-full bg-gray-300">
        <Image
          width={100}
          height={100}
          alt="Profile Picture"
          className="w-full h-full rounded-full object-cover"
          src={
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
        />
      </div>
      <button className="px-6 py-2 text-white bg-blue-600 rounded-lg">
        Change Picture
      </button>
      <h2 className="text-xl font-semibold text-gray-700">
        Profile Information
      </h2>
      <label>
        <p>Full Name</p> <input type="text" />
      </label>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Email Address</p> <input type="password" />
      </label>
      <div className="ml-auto mt-5 w-fit space-x-5">
        <button>Cancel</button>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
