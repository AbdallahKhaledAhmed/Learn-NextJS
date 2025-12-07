import { games } from "@/data/games";
import Image from "next/image";
import { ReactNode } from "react";
import { FaCalendarAlt, FaDesktop, FaGamepad, FaStar } from "react-icons/fa";

type Params = {
  params: { slug: string[] };
};

const GameSlug = async ({ params }: Params) => {
  const { slug } = await params;
  const [category, nameSlug] = slug;
  const game = games.find(
    (ele) => ele.category === category && ele.slug === nameSlug
  );

  const DataCard = ({ children }: { children: ReactNode }) => {
    return (
      <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg text-gray-300">
        {children}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <div className="absolute text-5xl font-bold text-white w-full h-full center bg-black/40">
          {game?.title}
        </div>
        <Image
          src={game!.image}
          alt={game!.title}
          width={1920}
          height={1080}
          className="object-cover h-full w-full"
        />
      </div>
      <p className="text-lg text-gray-700">{game?.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <DataCard>
          <FaStar className="text-yellow-300" />
          <p>Rating: {game?.rating}/10</p>
        </DataCard>
        <DataCard>
          <FaCalendarAlt />
          <p>Release Date: {game?.releaseDate}</p>
        </DataCard>
        <DataCard>
          <FaGamepad />
          <p>Developer: {game?.developer}</p>
        </DataCard>
        <DataCard>
          <FaDesktop />
          <p>Platforms: {game?.platforms.join(", ")}</p>
        </DataCard>
      </div>
    </div>
  );
};

export default GameSlug;
