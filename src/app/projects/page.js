"use client";

import { useState } from "react";

const projects = [
  {
    id: "todo",
    title: "To-Do List",
    description: "A Kanban board for managing tasks.",
    iframeSrc: "https://kanban-board-seven-snowy.vercel.app/",
  },
  {
    id: "movie",
    title: "Movie website",
    description: "A simple movie website to search, view, and manage movies.",
    iframeSrc: "https://movie-app-ashen-iota-35.vercel.app/",
  },
  {
    id: "eschool",
    title: "E-School Landing Page",
    description:
      "A static educational landing page built using HTML, CSS, and Bootstrap.",
    iframeSrc: "https://tarannumtasfia.github.io/e-school/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const iframeClass =
    "w-full h-screen rounded-xl shadow-xl border border-gray-300";

  if (selectedProject) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6 flex flex-col items-center">
        <button
          onClick={() => setSelectedProject(null)}
          className="mb-6 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          ← Back to Projects
        </button>

        <h1 className="text-3xl font-bold mb-4 text-indigo-800">
          {selectedProject.title}
        </h1>
        <iframe
          src={selectedProject.iframeSrc}
          className={iframeClass}
          title={selectedProject.title}
        ></iframe>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6">
      {/* Skills & Technologies Section - now at the top */}
      <section className="max-w-4xl mx-auto mb-12 bg-white rounded-2xl shadow-lg p-10 border border-indigo-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 text-center tracking-tight">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Skill Item */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-10 h-10 mb-2"
            />
            <span className="font-semibold text-indigo-700 mb-2">React</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-500 h-3 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-10 h-10 mb-2"
            />
            <span className="font-semibold text-yellow-600 mb-2">
              JavaScript
            </span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-10 h-10 mb-2"
            />
            <span className="font-semibold text-green-700 mb-2">Node.js</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="w-10 h-10 mb-2"
            />
            <span className="font-semibold text-orange-700 mb-2">HTML5</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-orange-500 h-3 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="w-10 h-10 mb-2"
            />
            <span className="font-semibold text-blue-700 mb-2">CSS3</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="w-10 h-10 mb-2"
            />
            <span className="font-semibold text-purple-700 mb-2">
              Bootstrap
            </span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="text-3xl font-bold mb-8 text-indigo-800 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map(({ id, title, description }) => (
          <div
            key={id}
            onClick={() =>
              setSelectedProject(projects.find((p) => p.id === id))
            }
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-indigo-100"
          >
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">
              {title}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
