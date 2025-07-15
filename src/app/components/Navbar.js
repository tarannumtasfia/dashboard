"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showSkills, setShowSkills] = useState(false);
  const [showSkillsDesktop, setShowSkillsDesktop] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-16 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="text-xl font-bold text-black">
            Tasfia Tarannum
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
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
            
            
            {/* Skills Dropdown (click to expand) */}
            <div className="relative">
              <button
                className="flex items-center gap-2 font-medium text-black hover:text-indigo-600 focus:outline-none"
                onClick={() => setShowSkillsDesktop(!showSkillsDesktop)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2v20M2 12h20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Skills
              </button>
              <ul
                className={`absolute right-0 mt-2 w-56 lg:w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-50 border border-indigo-100 break-words ${
                  showSkillsDesktop
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "Tailwind CSS",
                  "MS SQL Server",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 text-gray-700 hover:bg-indigo-50"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
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
          <div className="absolute left-0 right-0 top-16 mt-6 px-2 md:hidden bg-white rounded-2xl shadow-lg py-6 flex flex-col items-center w-full space-y-4 animate-fade-in z-50 max-w-full">
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

            {/* Skills Dropdown for Mobile */}
            <div className="w-full px-2 flex flex-col items-center relative">
              <button
                onClick={() => setShowSkills(!showSkills)}
                className="w-full flex flex-col items-center font-bold text-gray-900 py-2 px-4 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition text-center ml-5"
              >
                <span className="flex items-center justify-center gap-2">
                  Skills
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      showSkills ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden break-words w-full z-50 max-w-full ${
                  showSkills ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } bg-white rounded-xl shadow border border-indigo-100`}
              >
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "Tailwind CSS",
                  "MS SQL Server",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 text-gray-700 hover:bg-indigo-50"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
