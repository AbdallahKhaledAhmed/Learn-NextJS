import Link from "next/link";

const Header = () => {
  return (
    <div className="flex gap-3 bg-purple-800 text-white [&_a]:hover:text-purple-400 p-4">
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
