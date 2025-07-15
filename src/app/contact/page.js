'use client';

export default function Contact() {
  return (
    <main className="h-screen bg-gradient-to-br from-sky-50 to-indigo-100 flex flex-col items-center justify-start overflow-hidden">
      

      <div className="w-full flex-1 overflow-hidden px-6 pb-6">
        <iframe
          src="https://contact-form-iota-opal.vercel.app/"
          className="w-full h-full rounded-xl shadow-xl border border-gray-300"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </main>
  );
}
