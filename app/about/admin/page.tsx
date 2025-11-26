import Link from "next/link";

const Admin = () => {
  return (
    <div>
      <p>This is the About Admin Page!</p>
      <Link href={"/about"}>Go to About page</Link>
    </div>
  );
};

export default Admin;
