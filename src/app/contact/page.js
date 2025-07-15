'use client';

export default function Contact() {
  return (
    <main
      className="bg-gradient-to-br from-sky-50 to-indigo-100 px-6 pt-16 min-h-screen overflow-hidden"
      style={{ height: '100vh' }}
    >
      <iframe
        src="https://contact-form-iota-opal.vercel.app/"
        className="w-full rounded-xl shadow-xl border border-gray-300"
        style={{ height: 'calc(100vh - 64px)', border: 'none' }} // 64px = navbar height (h-16)
        title="Contact Form"
      ></iframe>
    </main>
  );
}
