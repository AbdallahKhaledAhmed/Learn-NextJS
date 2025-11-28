import Image from "next/image";
import img from "@/public/img.png";

const Home = () => {
  return (
    <div>
      <Image src={img} alt="coding image" width={500} />
      <Image
        src="https://4kwallpapers.com/images/walls/thumbs_2t/13640.png"
        alt="external coding image"
        width={500}
        height={200}
      />
    </div>
  );
};

export default Home;
