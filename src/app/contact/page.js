'use client';

export default function Contact() {
  return (
    <main className="pt-20 px-6 bg-gradient-to-br from-sky-50 to-indigo-100 min-h-screen overflow-hidden">
      <div
        className="w-full"
        style={{ height: 'calc(100vh - 5rem)' }} // subtract navbar height only
      >
        <iframe
          src="https://contact-form-iota-opal.vercel.app/"
          className="w-full h-full rounded-xl shadow-xl border border-gray-300"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </main>
  );
}
