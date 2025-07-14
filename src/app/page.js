'use client';

import { useState } from 'react';

export default function Home() {
  const [activeView, setActiveView] = useState('todo');

  const iframeClass =
    'w-full h-[80vh] rounded-xl shadow-xl border border-gray-300';

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">My Dashboard</h1>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveView('todo')}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeView === 'todo'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 border border-indigo-600'
          }`}
        >
          To-Do List
        </button>
        <button
          onClick={() => setActiveView('contact')}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeView === 'contact'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 border border-indigo-600'
          }`}
        >
          Contact Me
        </button>
      </div>

      {/* Iframe Container */}
      <div className="w-full  transition-all duration-500">
        {activeView === 'todo' ? (
          <iframe
            src="https://kanban-board-seven-snowy.vercel.app/"
            className={iframeClass}
          ></iframe>
        ) : (
          <iframe
            src="https://contact-form-iota-opal.vercel.app/"
            className={iframeClass}
          ></iframe>
        )}
      </div>
    </main>
  );
}
