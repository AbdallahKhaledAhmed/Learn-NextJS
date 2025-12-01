import { Bebas_Neue } from "next/font/google";

const bebasFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return <div className={`${bebasFont.className}`}>home page</div>;
};

export default Home;
