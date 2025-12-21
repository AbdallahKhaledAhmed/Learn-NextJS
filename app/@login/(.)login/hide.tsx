"use client";

import { useRouter } from "next/navigation";

export default function Hide() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="absolute top-5 right-5 center rounded-full size-6 p-2 bg-neutral-300"
    >
      X
    </button>
  );
}
