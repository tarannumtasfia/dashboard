"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-16 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="text-xl font-bold text-black">
            Tasfia Tarannum
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:text-indigo-600 font-medium text-black"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:text-indigo-600 font-medium text-black"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-indigo-600 font-medium text-black"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-16 mx-4 md:hidden bg-white rounded-xl shadow-lg py-4 flex flex-col items-center space-y-2 animate-fade-in z-50">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2 rounded-lg text-gray-900 font-bold hover:bg-indigo-50 hover:text-indigo-700 transition"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2 rounded-lg text-gray-900 font-bold hover:bg-indigo-50 hover:text-indigo-700 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2 rounded-lg text-gray-900 font-bold hover:bg-indigo-50 hover:text-indigo-700 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
