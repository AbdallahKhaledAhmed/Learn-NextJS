import Link from "next/link";

const About = () => {
  return (
    <div>
      <p>this is the about page</p>
      <Link href={"/about/admin"}>Go to About Admin page</Link>
    </div>
  );
};

export default About;
