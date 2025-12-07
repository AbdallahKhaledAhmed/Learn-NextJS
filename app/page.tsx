import Link from "next/link";

const Home = () => {
  return (
    <div className="center min-h-screen">
      <Link
        href="./games"
        className="px-3 py-2 text white rounded bg-blue-500 text-white font-bold hover:opacity-75"
      >
        Go To Games
      </Link>
    </div>
  );
};

export default Home;
