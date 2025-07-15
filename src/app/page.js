"use client";

import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 pt-16">
      <Navbar />
      <div className="p-6 flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto gap-10">
        {/* Left image placeholder */}
        <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
          <img
            src="/portfolio_img.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-115"
          />
        </div>

        {/* Right profile info */}
        <div className="flex flex-col space-y-6 max-w-md">
          <div>
            <h3 className="text-base font-semibold text-indigo-700 mt-1">
              Junior Software Engineer in Dhaka, Bangladesh
            </h3>
          </div>

          <Link href="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg w-fit shadow transition">
              Work out with me
            </button>
          </Link>

          <p className="text-gray-700 text-sm">
            I'm a Junior Software Engineer based in Bangladesh, currently
            working with modern technologies like React, Next.js, Node.js, and
            Express.js. I am passionate about building clean, efficient, and
            user-focused web applications. My goal is to continuously grow as a
            developer and contribute meaningfully to impactful projects through
            creativity, collaboration, and problem-solving.
          </p>

          <div>
            <span className="text-xs text-gray-500 tracking-widest">WORK</span>
            <div className="text-sm text-gray-700 mt-1">Bulipe Tech</div>
          </div>

          <div className="flex space-x-4 mt-2">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tasfiatarannum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-white shadow hover:bg-indigo-100 p-2 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-indigo-700"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" />
              </svg>
            </a>
            {/* Facebook */}
            {/* <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white shadow hover:bg-indigo-50 p-2 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-indigo-700"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.771c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z" />
              </svg>
            </a> */}

            {/* GitHub */}
            <a
              href="https://github.com/tarannumtasfia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-white shadow hover:bg-indigo-50 p-2 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-indigo-700"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/tasfiatarannum/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="rounded-full bg-white shadow hover:bg-purple-100 p-2 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <g>
                  <circle cx="12" cy="12" r="12" fill="#fff" />
                  <path
                    d="M7.5 16.5c2.5-2.5 6.5-6.5 6.5-6.5"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.5 7.5c-2.5 2.5-6.5 6.5-6.5 6.5"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </a>
            {/* Map Icon */}
            <a
              href="/map"
              aria-label="Map"
              className="rounded-full bg-white shadow hover:bg-purple-100 p-2 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <g>
                  <circle cx="12" cy="12" r="12" fill="#fff" />
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                    fill="#8B5CF6"
                  />
                </g>
              </svg>
            </a>
            {/* CV Icon */}
            <a
              href="/CV.pdf"
              aria-label="Download CV"
              className="rounded-full bg-white shadow hover:bg-purple-100 p-2 transition flex items-center justify-center"
              download
            >
              <img
                src="/cv-icon.png"
                alt="CV Icon"
                style={{
                  width: "24px",
                  height: "24px",
                  filter:
                    "invert(24%) sepia(94%) saturate(7470%) hue-rotate(247deg) brightness(90%) contrast(110%)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
