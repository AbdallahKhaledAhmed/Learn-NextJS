import { products } from "../page";

interface ProductProps {
  params: { id: string };
}

export default async function Product(props: ProductProps) {
  const { id } = await props.params;
  const product = products.find((p) => p.id.toString() === id);
  return (
    <div className="p-10 space-y-5 text-3xl">
      <h2>{product?.name}</h2>
      <img src={product?.image} alt={product?.name} className="w-160" />
      <p>Price: {product?.price}</p>
    </div>
  );
}
