"use client";

import { useState } from "react";

const projects = [
  {
    id: "todo",
    title: "To-Do List",
    
    role: "Task Manager App",
    
    tags: ["React", "Kanban", "Productivity"],
   
    logo: "/portfolio_img.jpg", // Placeholder
    description: "A Kanban board for managing tasks.",
    iframeSrc: "https://kanban-board-sigma-sepia.vercel.app/",
    bg: "bg-orange-100",
  },
  {
    id: "movie",
    title: "Movie website",
    
    role: "Movie Search App",
    date: "4 Feb, 2023",
    tags: ["React", "API", "Movies"],
    
    logo: "/portfolio_img.jpg", // Placeholder
    description: "A simple movie website to search, view, and manage movies.",
    iframeSrc: "https://movie-app-ashen-iota-35.vercel.app/",
    bg: "bg-green-100",
  },
  {
    id: "eschool",
    title: "E-School Landing Page",
  
    role: "E School Landing Page",
   
    tags: ["HTML", "CSS", "Bootstrap"],
    
   
    logo: "/portfolio_img.jpg", // Placeholder
    description:
      "A static educational landing page built using HTML, CSS, and Bootstrap.",
    iframeSrc: "https://tarannumtasfia.github.io/e-school/",
    bg: "bg-blue-100",
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
      <h1 className="text-4xl font-bold mb-8 text-indigo-800 text-left">
        Project List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative ${project.bg} rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col min-h-[340px]`}
          >
            {/* Date */}
            
           
            {/* Company Logo */}
            
            {/* Company Name */}
            <div className="mt-8 font-semibold text-lg text-gray-800">
              {project.company}
            </div>
            {/* Role/Title */}
            <div className="font-bold text-2xl mt-2 mb-2 text-gray-900">
              {project.role}
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white rounded-full px-3 py-1 text-gray-600 text-sm font-medium shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Description */}
            <div className="mb-4 text-gray-700 text-sm">
              {project.description}
            </div>
            {/* Rate & Location */}
            <div className="flex items-center justify-between mt-auto">
              
             
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
