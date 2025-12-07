import type { Game } from "@/data/games";
import { games } from "@/data/games";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const GameCard = (props: Game) => {
  return (
    <Link
      href={`./${props.category}/${props.slug}`}
      className="rounded-xl bg-gray-900 p-5 space-y-5 group transition-all transform duration-300 hover:scale-105"
    >
      <div className="rounded-xl overflow-hidden relative">
        <div className="absolute w-full h-full group-hover:bg-black transition-colors duration-300"></div>
        <Image src={props.image} alt={props.title} width={1920} height={1080} />
      </div>
      <h2 className="text-2xl font-bold text-white">{props.title}</h2>
      <p className="text-gray-400 text-sm">{props.description}</p>
      <p className="text-yellow-400 font-medium flex items-center gap-2">
        <FaStar /> {props.rating}/10
      </p>
    </Link>
  );
};

const Games = () => {
  return (
    <div className="min-h-screen p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {games.map((ele, ind) => (
        <GameCard {...ele} key={ind} />
      ))}
    </div>
  );
};

export default Games;
