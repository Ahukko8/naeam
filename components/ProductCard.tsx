/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
    </div>
  );
}