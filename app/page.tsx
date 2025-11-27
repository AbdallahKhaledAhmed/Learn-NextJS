import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col">
      <p>Home</p>
      <Link href={"/timeout"}>Go to another page</Link>
    </div>
  );
};

export default Home;
