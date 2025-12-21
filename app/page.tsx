import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen center flex-col gap-5">
      <p className="text-2xl">Welcome this is the home page</p>
      <button>
        <Link href="/games" className="bg-blue-500 text-white p-2 rounded">
          go to Games
        </Link>
      </button>
    </div>
  );
};

export default Home;
