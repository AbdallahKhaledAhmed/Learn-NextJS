"use client";

import { useRouter } from "next/navigation";

export default function Return() {
  const router = useRouter();
  function redirectToEcommerce() {
    router.push("/ecommerce");
  }
  return (
    <div className="absolute top-5 right-5 text-lg font-medium rounded-full bg-neutral-300 center size-8">
      <button onClick={redirectToEcommerce}>X</button>
    </div>
  );
}
