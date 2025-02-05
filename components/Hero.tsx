"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const randomStartPosition = () => ({
  x: Math.random() > 0.5 ? -100 : window.innerWidth + 100,
  y: Math.random() * window.innerHeight,
});

const randomEndPosition = () => ({
  x: Math.random() > 0.5 ? window.innerWidth + 100 : -100,
  y: Math.random() * window.innerHeight,
});

const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];

export function Hero() {
  const [shapes, setShapes] = useState(
    Array.from({ length: 5 }, () => ({ ...randomStartPosition(), color: colors[Math.floor(Math.random() * colors.length)] }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShapes(Array.from({ length: 5 }, () => ({ ...randomStartPosition(), color: colors[Math.floor(Math.random() * colors.length)] })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 bg-gray-50 relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,0V600H1440V0C1200,300,600,300,0,0Z"
          />
        </svg>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            initial={{ x: shape.x, y: shape.y, opacity: 0 }}
            animate={{ x: randomEndPosition().x, y: randomEndPosition().y, opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 8, ease: "easeInOut" }}
            className={`absolute w-20 h-20 ${shape.color} opacity-30 rounded-full`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Welcome to Our</span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-blue-600"
            >
              Amazing Platform
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Discover our amazing products and services that will transform your experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="rounded-md shadow">
              <a
                href="#products"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
