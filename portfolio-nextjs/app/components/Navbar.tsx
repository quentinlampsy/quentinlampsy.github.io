'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold font-mono transition-colors ${
              scrolled
                ? 'text-blue-400 hover:text-blue-500'
                : 'text-white hover:text-blue-200'
            }`}
          >
            {'</QuentinLam>'}
          </button>
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Education', id: 'education' },
              { label: 'Publications', id: 'publications' },
              { label: 'Resume', id: 'resume' },
              { label: 'Connect', id: 'connect' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Certificates', id: 'certificates' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
