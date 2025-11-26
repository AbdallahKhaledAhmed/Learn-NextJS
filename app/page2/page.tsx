"use client";
import { useRouter } from "next/navigation";

const page2 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <p>Welcome to the page2!</p>
      <button
        className="bg-yellow-400 rounded text-white p-3 w-fit"
        onClick={() => router.back()}
      >
        Go Back to page 1
      </button>
    </div>
  );
};

export default page2;
