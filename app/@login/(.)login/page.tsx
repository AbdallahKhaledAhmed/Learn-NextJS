import Hide from "./hide";

export default function InterceptingLogin() {
  return (
    <div className="min-h-screen center bg-black/40 fixed inset-0">
      <div className="flex flex-col p-10 rounded-lg shadow-lg w-140 space-y-5 bg-white relative">
        <Hide />
        <h2 className="text-2xl font-semibold">Login</h2>
        <label>
          <p className="text-sm font-medium text-gray-700">Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label>
          <p className="text-sm font-medium text-gray-700">Password</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <button className="w-full px-4 py-2 text-white bg-gray-900  rounded-lg hover:bg-blue-600 focus:outline-none  focus:ring focus:ring-blue-300">
          Login
        </button>
      </div>
    </div>
  );
}
