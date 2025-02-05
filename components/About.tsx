/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function About() {
  const [inView, setInView] = useState(false); // State to track visibility
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref to observe the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set inView based on intersection state
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn more about our story and mission.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="relative h-64 lg:h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/api/placeholder/600/400"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
