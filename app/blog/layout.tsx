import Link from "next/link";
import { ReactNode } from "react";

const BlogLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div>
      <header className="p-6 bg-gray-900 text-3xl text-white">{title}</header>
      <div className="flex p-3 gap-5">
        <aside className="w-64 flex flex-col [&>a]:py-2 [&>a]:hover:bg-gray-300 ">
          <Link href={"./1"}>Post1</Link>
          <Link href={"./2"}>Post2</Link>
          <Link href={"./3"}>Post3</Link>
        </aside>
        <main className="py-2">{children}</main>
      </div>
    </div>
  );
};

export default BlogLayout;
