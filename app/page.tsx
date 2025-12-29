import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen center flex-col gap-5">
      <h1>this is the home page</h1>
      <Link
        href="/form"
        className="inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
      >
        Go to Form
      </Link>
    </div>
  );
}
