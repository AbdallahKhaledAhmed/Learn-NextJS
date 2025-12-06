import { movies } from "@/data/movies";
import Link from "next/link";

const Movies = () => {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-semibold mb-4">Movies List</h1>
      <div className="flex flex-col gap-5">
        {movies.map((ele, ind) => (
          <div key={ind} className="bg-gray-800 p-4 rounded-lg">
            <Link
              href={"./" + ele.id}
              className="text-blue-400 hover:text-blue-600"
            >
              {ele.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
