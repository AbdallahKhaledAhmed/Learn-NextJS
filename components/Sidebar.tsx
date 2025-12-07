import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-purple-200 p-5 flex flex-col [&>a]:py-2 [&>a]:hover:bg-purple-300">
      <Link href={"./technology"}>Technology</Link>
      <Link href={"./design"}>Design</Link>
      <Link href={"./business"}>Business</Link>
    </aside>
  );
};

export default Sidebar;
