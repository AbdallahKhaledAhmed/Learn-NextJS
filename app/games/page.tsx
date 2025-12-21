import GamesList from "@/components/games-list";
import Sidebar from "@/components/sidebar";

export default function Games() {
  return (
    <div className="flex">
      <Sidebar />
      <GamesList />
    </div>
  );
}
