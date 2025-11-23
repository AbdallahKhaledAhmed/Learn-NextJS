import Link from "next/link";

const Home = () => {
  return (
    <>
      Welcome to the Home Page <br /> This is the landing page of this website.{" "}
      <br />
      <Link href="/dashboard">Go to Dashboard</Link>
    </>
  );
};

export default Home;
