import Link from "next/link";

export type props = {
  title: string;
  symbol: string;
  description: string;
  bgClass?: string;
  href: string;
};

const Card = ({ title, symbol, description, bgClass, href }: props) => {
  return (
    <Link
      className={`inline-flex flex-col gap-3 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105 ${bgClass}`}
      href={href}
    >
      <div className="flex justify-between items-center text-xl ">
        <span className="font-semibold">{title}</span>
        <span className="text-2xl">{symbol}</span>
      </div>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
};

export default Card;
