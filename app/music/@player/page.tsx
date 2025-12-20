import {
  IoPlaySkipBackOutline,
  IoPlayOutline,
  IoPlaySkipForwardOutline,
} from "react-icons/io5";

export default function Player() {
  return (
    <div className="center fixed bottom-0 left-[35%] bf-[#171717] p-4 w-160 text-xl space-x-5">
      <div className="bg-gray-400/30 rounded-md size-10"></div>
      <button>
        <IoPlaySkipBackOutline />
      </button>
      <button>
        <IoPlayOutline />
      </button>
      <button>
        <IoPlaySkipForwardOutline />
      </button>
      <span className="text-sm text-gray-400">2:21</span>
      <div className="w-64 relative h-1 bg-gray-700 rounded-md">
        <div
          className="absolute top-0 left-0 h-1 bg-white rounded-md"
          style={{ width: "50%" }}
        />
        <input
          type="range"
          className="absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer"
        />
      </div>
      <span className="text-sm text-gray-400">3:11</span>
    </div>
  );
}
