import Image from "next/image";

const ProfileSettings = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>
      <h2 className="text-xl font-semibold text-gray-700">Profile Picture</h2>
      <Image
        width={96}
        height={96}
        alt="Profile Picture"
        src={
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      />
      <label>
        <p>Email Notifications</p> <input type="text" />
      </label>
      <label>
        <p>SMS Notifications</p>
        <input type="text" />
      </label>
      <label>
        <p>Push Notifications</p> <input type="password" />
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
