import Link from "next/link";
import { products } from "../../page";
import Return from "./return";

interface InterceptProductProps {
  params: { id: string };
}

export default async function InterceptProduct(props: InterceptProductProps) {
  const { id } = await props.params;
  const product = products.find((p) => p.id.toString() === id);

  return (
    <div className="fixed inset-0 bg-black/40 min-h-screen center">
      <div className="mx-auto p-10 relative flex-col bg-white gap-5 text-3xl center rounded-lg border border-gray-300">
        <Return />
        <h2>{product?.name}</h2>
        <img src={product?.image} alt={product?.name} className="w-160" />
        <p>Price: {product?.price}</p>
      </div>
    </div>
  );
}
