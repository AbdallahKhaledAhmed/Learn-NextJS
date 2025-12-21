import { games } from "@/db/games";

export default function GamesList() {
  return (
    <div className="space-y-5 p-5">
      <h2 className="font-bold text-2xl">Featured Games</h2>
      <div className="flex gap-5 flex-wrap">
        {games.map((game) => (
          <div
            key={game.id}
            className="rounded-lg bg-gray-800 p-4 text-white font-semibold text-lg w-60 h-50 shadow-lg"
          >
            <img src={game.img} alt={game.name} className="rounded-lg h-35" />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
