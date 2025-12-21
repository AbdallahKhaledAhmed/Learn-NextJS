import Link from "next/link";
import { FaGamepad, FaUser, FaTrophy, FaCog } from "react-icons/fa";

const sections = [
  { name: "Games", icon: FaGamepad },
  { name: "Profile", icon: FaUser },
  { name: "Achievements", icon: FaTrophy },
  { name: "Settings", icon: FaCog },
];

export default function Sidebar() {
  return (
    <div className="w-64 p-5 pb-10 bg-gray-900 min-h-screen h-full text-white flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">Gaming Dashboard</h2>
        <ul className="p-2">
          {sections.map((section) => (
            <li
              key={section.name}
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            >
              <div className="flex items-center">
                <section.icon className="mr-2" />
                <span>{section.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/login" className="text-start text-2xl font-bold">
        Login
      </Link>
    </div>
  );
}
