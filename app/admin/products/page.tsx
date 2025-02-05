import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <Link href="/admin/products/new" className="bg-blue-500 text-white p-2 rounded">
        Add New Product
      </Link>
    </div>
  );
}