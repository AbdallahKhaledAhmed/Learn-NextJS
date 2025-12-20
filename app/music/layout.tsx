import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
}

export default function Layout({
  children,
  sidebar,
  songs,
  player,
}: LayoutProps) {
  return (
    <div className="bg-[#222222] size-full min-h-screen text-white flex">
      {sidebar}
      <div className="flex flex-col w-[97%] mx-auto py-5 px-10 justify-between">
        {songs}
        {player}
      </div>
    </div>
  );
}
