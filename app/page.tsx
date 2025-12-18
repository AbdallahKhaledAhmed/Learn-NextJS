import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p>Welcome to the Homepage</p>
      <p>This is the main public page of the website.</p>
      <Link href="./music">Go to Music</Link>
    </div>
  );
};

export default Home;
