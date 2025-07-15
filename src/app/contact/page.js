'use client';

export default function Contact() {
  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 to-indigo-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">Contact Me</h1>

      <div className="w-full h-full rounded-xl shadow-xl border border-gray-300 overflow-hidden">
        <iframe
          src="https://contact-form-iota-opal.vercel.app/"
          className="w-full h-full"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </main>
  );
}
