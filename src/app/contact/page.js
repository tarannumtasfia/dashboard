'use client';

export default function Contact() {
  const iframeClass =
    'w-full h-[100vh] rounded-xl shadow-xl border border-gray-300';

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">Contact Me</h1>

      <div className="w-full transition-all duration-500">
        <iframe
          src="https://contact-form-iota-opal.vercel.app/"
          className={iframeClass}
        ></iframe>
      </div>
    </main>
  );
}
