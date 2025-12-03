import Link from "next/link";

const Settings = () => {
  return (
    <div className="flex-1 bg-white shadow-2xl rounded-lg p-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 ">Settings</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Customize your account settings, profile, and notifications here. Choose
        an option from the sidebar to begin.
      </p>
      <div className="flex">
        <div className="space-y-4 w-1/4">
          <h2 className="text-2xl font-semibold text-gray-800">Quick Links</h2>
          <ul className="space-y-6 px-5 text-lg">
            <li>
              <Link href="./account" className="text-indigo-600">
                Account
              </Link>
            </li>
            <li>
              <Link href="./notification" className="text-yellow-600">
                Notification
              </Link>
            </li>
            <li>
              <Link href="./profile" className="text-green-600">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Select a Setting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Choose an option from the sidebar to manage your account,
            notifications, or profile settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
