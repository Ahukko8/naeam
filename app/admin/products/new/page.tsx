import ProductForm from "@/components/ProductForm";


export default function NewProductPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload New Product</h2>
      <ProductForm />
    </div>
  );
}