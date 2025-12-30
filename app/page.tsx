import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen center flex-col gap-10">
      <h1 className="text-6xl font-bold text-gray-700">🎬 Movies App</h1>
      <div className="space-x-3">
        <Link
          href="/add-movie"
          className="p-3 text-white rounded-lg hover:opacity-75 bg-blue-600"
        >
          Add Movie
        </Link>
        <Link
          href="/movies"
          className="p-3 text-white rounded-lg hover:opacity-75 bg-gray-600"
        >
          View all Movies
        </Link>
      </div>
    </div>
  );
}
