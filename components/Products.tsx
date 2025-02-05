/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out our latest collection of amazing products.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-500">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </section>
  );
}
