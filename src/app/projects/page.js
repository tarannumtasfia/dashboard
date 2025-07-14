'use client';

import { useState } from 'react';

const projects = [
  {
    id: 'todo',
    title: 'To-Do List',
    description: 'A Kanban board for managing tasks.',
    iframeSrc: 'https://kanban-board-seven-snowy.vercel.app/',
  },
  {
    id: 'movie',
    title: 'movie website',
    description: 'A simple movie website to search, view, and manage movies.',
    iframeSrc: 'https://movie-app-ashen-iota-35.vercel.app/',
  },
   {
    id: 'eschool',
    title: 'E-School Landing Page',
    description: 'A static educational landing page built using HTML, CSS, and Bootstrap.',
    iframeSrc: 'https://tarannumtasfia.github.io/e-school/',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

 const iframeClass = 'w-full h-screen rounded-xl shadow-xl border border-gray-300';

  if (selectedProject) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6 flex flex-col items-center">
        <button
          onClick={() => setSelectedProject(null)}
          className="mb-6 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          ← Back to Projects
        </button>

        <h1 className="text-3xl font-bold mb-4 text-indigo-800">{selectedProject.title}</h1>
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
      <h1 className="text-3xl font-bold mb-8 text-indigo-800 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map(({ id, title, description }) => (
          <div
            key={id}
            onClick={() => setSelectedProject(projects.find(p => p.id === id))}
            className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
