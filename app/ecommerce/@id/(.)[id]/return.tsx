"use client";

import { useRouter } from "next/navigation";

export default function Return() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="absolute top-5 right-5 center p-2 rounded-full bg-neutral-300 size-6 text-base font-semibold"
    >
      X
    </button>
  );
}
