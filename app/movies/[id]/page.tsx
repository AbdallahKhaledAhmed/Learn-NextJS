import { movies } from "@/data/movies";
import { FaStar } from "react-icons/fa";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

const MovieId = async ({ params }: Params) => {
  const slugId = (await params).id;
  const movie = movies.find((ele) => ele.id === slugId);
  return (
    <div className="p-8 space-y-10">
      <header className="bg-linear-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold text-white mb-4">
          {movie?.name}
        </h1>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </header>
      <main className="bg-gray-800 p-8 rounded-xl shadow-lg flex justify-between items-center">
        <div className=" flex flex-col">
          <p className="text-xl text-gray-300">Rating:</p>
          <div className="text-yellow-400 space-y-2 space-x-1">
            <FaStar className="inline-block" />
            <span className="text-2xl font-bold">{movie?.starCount}</span>/ 5
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-300">Comments:</p>
          <p className="text-2xl font-semibold text-white">
            {movie?.commentCount} comments
          </p>
        </div>
      </main>
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold text-white">Comments</h2>
        {movie?.comments.map((comment, ind) => (
          <div
            className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 text-gray-300"
            key={ind}
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieId;
