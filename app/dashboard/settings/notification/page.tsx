const NotificationsSettings = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
      <h2 className="text-xl font-semibold text-gray-700">
        Notification Preferences
      </h2>
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

export default NotificationsSettings;
