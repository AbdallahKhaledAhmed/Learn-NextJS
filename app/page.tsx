import { movies, MovieType } from "@/data/movies";
import Link from "next/link";
import { ReactNode } from "react";
import { FaStar, FaComment } from "react-icons/fa";



const MovieCard = (props: MovieType) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 space-y-3">
      <Link
        href={"./movies/" + props.id}
        className="text-2xl font-bold block text-blue-400 hover:text-blue-600"
      >
        {props.name}
      </Link>
      <p className="text-gray-400 text-sm">{props.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 flex gap-2 items-center">
          <FaComment />
          {props.commentCount}
        </span>
        <span className="text-yellow-400 flex gap-2 items-center">
          <FaStar />
          {props.starCount}
        </span>
      </div>
    </div>
  );
};

const HeaderCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg center flex-col text-lg font-medium">
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-8 text-white space-y-8">
      <header className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-3xl font-semibold text-white">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <HeaderCard>
            <p>Total Movies</p>
            <p className="text-4xl font-bold">{movies.length}</p>
          </HeaderCard>
          <HeaderCard>
            <p>Total Comments</p>
            <p className="text-4xl font-bold">
              {movies.reduce((total, ele) => (total += ele.commentCount), 0)}
            </p>
          </HeaderCard>
          <HeaderCard>
            <p>Average Rating</p>
            <p className="text-4xl font-bold">
              {movies.reduce((total, ele) => (total += ele.starCount), 0) /
                movies.length}{" "}
              / 5
            </p>
          </HeaderCard>
        </div>
      </header>
      <h2 className="text-3xl font-semibold text-white">Movie List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {movies.map((ele, ind) => (
          <MovieCard {...ele} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Home;
