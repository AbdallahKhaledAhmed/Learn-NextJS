import Link from "next/link";
import { BsClock, BsHeart } from "react-icons/bs";

const songs = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: "5:55",
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
  },
  {
    id: 3,
    title: "Hotel California",
    artist: "Eagles",
    duration: "6:30",
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "3:23",
  },
];

export default async function Songs() {
  await new Promise((res) => {
    setTimeout(() => {
      res("");
    }, 1000);
  });
  return (
    <div>
      <h2 className="font-bold text-3 xl mb-5">Songs Collection</h2>
      <ul>
        {songs.map((ele, ind) => (
          <Link href={"./" + ele.id} key={ind}>
            <li
              key={ele.id}
              className="center gap-5 p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-16 rounded-md shadow-gray-700"
              />
              <div>
                <p className="font-medium">{ele.title}</p>
                <p className="text-sm text-gray-400">{ele.artist}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <BsClock />
                <p>{ele.duration}</p>
                <BsHeart className="hover:text-red-500 mx-4" />
                <button className="mx-2">⁝</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
