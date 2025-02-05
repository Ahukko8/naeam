/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <img src="/logo.jpg" alt="logo" width={50} height={50} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-600 hover:text-gray-900">Products</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="#products" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Products</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
