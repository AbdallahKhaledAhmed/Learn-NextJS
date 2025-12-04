import Link from "next/link";

type MovieType = {
  name: string;
  description: string;
  commentCount: number;
  starCount: number;
};

const movies: MovieType[] = [
  {
    name: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    commentCount: 124,
    starCount: 4.7,
  },
  {
    name: "Interstellar",
    description: "A space exploration film by Christopher Nolan.",
    commentCount: 98,
    starCount: 4.8,
  },
  {
    name: "The Dark Knight",
    description: "The iconic Batman film directed by Christopher Nolan.",
    commentCount: 255,
    starCount: 4.9,
  },
];

const MovieCard = (props: MovieType) => {
  return (
    <div>
      <Link href={"./" + props.name}>{props.name}</Link>
      <p>{props.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-300">{props.commentCount}</span>
        <span className="text-yellow-400">{props.starCount}</span>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-8 text-white">
      <header>
        <h2>Dashboard Overview</h2>
        <div>
          <p>Total Movies</p>
          <p>{movies.length}</p>
        </div>
        <div>
          <p>Total Comments</p>
          <p>{movies.reduce((total, ele) => (total += ele.commentCount), 0)}</p>
        </div>
        <div>
          <p>Average Rating</p>
          <p>
            {movies.reduce((total, ele) => (total += ele.starCount), 0) /
              movies.length}
          </p>
        </div>
      </header>
      <h2>Movie List</h2>
    </div>
  );
};

export default Home;
