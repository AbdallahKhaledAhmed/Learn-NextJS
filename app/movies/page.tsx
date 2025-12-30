import MovieCard from "@/components/movie-card";
import { prisma } from "@/lib/prisma";

async function getMovies() {
  const movies = await prisma.movie.findMany();
  return movies;
}

export default async function Movies() {
  const movies = await getMovies();
  return (
    <div className="min-h-screen bg-neutral-200 px-30 py-10 space-y-10">
      <h1 className="text-4xl font-bold">All Movies</h1>
      <div className="flex gap-5">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard {...movie} key={movie.id} />)
        ) : (
          <div>No Movies yet!</div>
        )}
      </div>
    </div>
  );
}
