const AccountSettings = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Account Settings</h1>
      <h2 className="text-xl font-semibold text-gray-700">
        Profile Information
      </h2>
      <label>
        <p>Name</p> <input type="text" />
      </label>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <h2 className="text-xl font-semibold text-gray-700 mt-5">Security</h2>
      <label>
        <p>Password</p> <input type="password" />
      </label>
      <label>
        <p>Confirm Password</p>
        <input type="password" />
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

export default AccountSettings;
