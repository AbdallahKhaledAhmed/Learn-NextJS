import { FaClock, FaHome } from "react-icons/fa";
import { TbTrendingUp } from "react-icons/tb";

const menuItems = [
  { icon: FaHome, title: "Discover" },
  { icon: TbTrendingUp, title: "Trending" },
  { icon: FaClock, title: "Recent" },
];

export default async function Sidebar() {
  await new Promise((res) => {
    setTimeout(() => {
      res("");
    }, 500);
  });
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#111111]">
      <section className="p-5 space-y-5">
        <h2 className="text-xl font-bold">Menu</h2>
        <ul className="[&>li]:hover:bg-white/10 w-50">
          {menuItems.map((ele, ind) => (
            <li
              key={ind}
              className="flex gap-2 items-center cursor-pointer p-2"
            >
              <ele.icon />
              {ele.title}
            </li>
          ))}
        </ul>
      </section>
      <section className="p-5 space-y-5">
        <h2 className="text-xl font-bold">Favorite</h2>
        {[1, 2, 3, 4, 5].map((ele) => (
          <div key={ele} className="flex gap-2 items-center">
            <img
              src="https://images.unsplash.com/photo-1739279479894-71d500e7886d?%20q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&%20ixid=M3wxMjA3FDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="music"
              className="rounded-md w-15 h-15 bg-gray-700"
            />
            <div>
              <p>Random</p>
              <p className="text-sm text-gray-400">Person</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
